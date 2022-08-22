
# Django
from django.urls import path, include

# DRF
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.authtoken import views

# Views
from blog.api.views import PostList, PostDetail

urlpatterns = [
    path("posts/", PostList.as_view(), name="api_post_list"),
    path("posts/<int:pk>", PostDetail.as_view(), name="api_post_detail"),
]

urlpatterns = format_suffix_patterns(urlpatterns)

# DRF Auth
urlpatterns += [
    path("auth/", include("rest_framework.urls")),
    path("token-auth/", views.obtain_auth_token)
]