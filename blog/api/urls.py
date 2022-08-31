
# Django
from django.urls import path, include, re_path

# DRF
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.authtoken import views

# Views
from blog.api.views import UserDetail, TagViewSet, PostViewSet

# DRF Browsable API
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
import os

# DRF Viewsets & Routers
from rest_framework.routers import DefaultRouter


urlpatterns = [
    # path("posts/", PostList.as_view(), name="api_post_list"),
    # path("posts/<int:pk>", PostDetail.as_view(), name="api_post_detail"),
    path("users/<str:email>", UserDetail.as_view(), name="api_user_detail"),
]

urlpatterns = format_suffix_patterns(urlpatterns)


# DRF Browsable API
schema_view = get_schema_view(
    openapi.Info(
        title="Blango API",
        default_version="v1",
        description="API for Blango Blog",
    ),
    url=f"https://{os.environ.get('CODIO_HOSTNAME')}-8000.codio.io/api/v1/",
    public=True,
)


# DRF Viewsets & Routers
router = DefaultRouter()
router.register("tags", TagViewSet)
router.register("posts", PostViewSet)



# DRF Auth
urlpatterns += [
    path("auth/", include("rest_framework.urls")),
    path("token-auth/", views.obtain_auth_token),
    re_path(
        r"^swagger(?P<format>\.json|\.yaml)$",
        schema_view.without_ui(cache_timeout=0),
        name="schema-json",
    ),
    path(
        "swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    path("", include(router.urls)),
]
