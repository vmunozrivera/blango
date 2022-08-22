
# DRF
from rest_framework import generics

# Serializers
from blog.api.serializers import PostSerializer, UserSerializer

# Models
from blog.models import Post
from blango_auth.models import User

# Permisions
from blog.api.permissions import AuthorModifyOrReadOnly
from blog.api.permissions import AuthorModifyOrReadOnly, IsAdminUserForObject


class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AuthorModifyOrReadOnly | IsAdminUserForObject]
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class UserDetail(generics.RetrieveAPIView):
    lookup_field = "email"
    queryset = User.objects.all()
    serializer_class = UserSerializer