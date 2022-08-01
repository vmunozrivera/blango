
# Python - logging
import logging
logger = logging.getLogger(__name__)

# Django register template library
from django import template
register = template.Library()

# Django user model check
from django.contrib.auth import get_user_model
user_model = get_user_model()

# Models
from blog.models import Post

# Django escape the dangerous user supplied data
# from django.utils.html import escape 
# from django.utils.safestring import mark_safe

# Django escapes html values and marks strings safe 
# in a single step
from django.utils.html import format_html


@register.filter
def author_details(author, current_user=None):
  """ Show author first and last name if available  """
  
  if not isinstance(author, user_model):
    # return empty string as safe default
    return ""
  
  if author == current_user:
        return format_html("<strong>me</strong>")

  if author.first_name and author.last_name:
    name = f"{author.first_name} {author.last_name}"
  else:
    name = f"{author.username}"

  if author.email:
    # email = author.email
    # prefix = f'<a href="mailto:{email}">'
    # suffix = "</a>"
    prefix = format_html('<a href="mailto:{}">', author.email)
    suffix = format_html("</a>")
  else:
    prefix = ""
    suffix = ""

  # return mark_safe(f"{prefix}{name}{suffix}")
  return format_html('{}{}{}', prefix, name, suffix)


@register.simple_tag
def row(extra_classes=""):
  return format_html('<div class="row {}">', extra_classes)


@register.simple_tag
def endrow():
  return format_html("</div>")


@register.simple_tag
def col(extra_classes=""):
    return format_html('<div class="col {}">', extra_classes)


@register.simple_tag
def endcol():
    return format_html("</div>")


@register.inclusion_tag("blog/post-list.html")
def recent_posts(post):
  posts = Post.objects.exclude(pk=post.pk)[:5]
  logger.debug("Loaded %d recent posts for post %d", len(posts), post.pk)
  return { "title": "Recent Posts", "posts": posts }