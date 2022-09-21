
# Pyhton
import logging

# Django
from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from django.urls import reverse # passing variable FETCH & HOOKS

# Models
from blog.models import Post
from blog.forms import CommentForm

# Variables
logger = logging.getLogger(__name__)


def index(request):
  #from django.http import HttpResponse
  #return HttpResponse(str(request.user).encode("ascii"))
  #posts = Post.objects.filter(published_at__lte=timezone.now())
  posts = Post.objects.filter(published_at__lte=timezone.now()).select_related("author")
  logger.debug("Got %d posts", len(posts)) # posts quantity log
  return render(request, "blog/index.html", {"posts": posts})


def post_detail(request, slug):
  post = get_object_or_404(Post, slug=slug)
  comment_form = CommentForm()

  if request.user.is_active:
    if request.method == 'POST':
      comment_form = CommentForm(request.POST)

      if comment_form.is_valid():
        comment = comment_form.save(commit=False)
        comment.content_object = post
        comment.creator = request.user
        comment.save()
        logger.info(
          "Created comment on Post %d for user %s", post.pk, request.user
        )
        return redirect(request.path_info)
    
    else: 
      comment_form

  return render(request, "blog/post-detail.html", {"post": post, "comment_form": comment_form})


def get_ip(request):
  from django.http import HttpResponse
  return HttpResponse(request.META['REMOTE_ADDR'])


def post_table(request):
  #return render(request, "blog/post-table.html")
  return render(
        request, "blog/post-table.html", {"post_list_url": reverse("post-list")}
    )