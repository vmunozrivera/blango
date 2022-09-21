"""blango URL Configuration"""

from django.contrib import admin
from django.urls import path, include
import blog
import blango_auth
from django.conf.urls.static import static

# Debug
import debug_toolbar
from django.conf import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blog.urls')),
    path('accounts/', include('blango_auth.urls')),
    path('ip/', blog.views.get_ip),
    path("api/v1/", include("blog.api.urls")),
    path("post-table/", blog.views.post_table, name="blog-post-table"),
]

if settings.DEBUG:
    urlpatterns += [
        path("__debug__/", include(debug_toolbar.urls)),
    ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)