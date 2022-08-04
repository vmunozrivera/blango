"""blango URL Configuration"""

from django.contrib import admin
from django.urls import path, include
import blog

import debug_toolbar
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blog.urls')),
    path('ip/', blog.views.get_ip),
]

if settings.DEBUG:
    urlpatterns += [
        path("__debug__/", include(debug_toolbar.urls)),
    ]