from django.contrib import admin
from blog.models import Tag, Post


admin.site.register(Tag)


class PostAdmin(admin.ModelAdmin):

  prepopulated_fields = {"slug": ("title",)}
  #exclude = ["slug"]
  list_display = ("title", "slug", "published_at")

admin.site.register(Post, PostAdmin)
