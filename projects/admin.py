from django.contrib import admin

from .models import Project, ProjectSkill, GalleryImage


# Register your models here.
class ProjectAdmin(admin.ModelAdmin):
    list_display = ["title", "link", "cover_image", "cover_video"]


class ProjectSkillAdmin(admin.ModelAdmin):
    list_display = ["skill", "parent_project"]


class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ["image", "parent_project"]


admin.site.register(Project, ProjectAdmin)
admin.site.register(ProjectSkill, ProjectSkillAdmin)
admin.site.register(GalleryImage, GalleryImageAdmin)
