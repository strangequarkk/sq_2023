from django.contrib import admin
from .models import Skill, SubSkill


# Register your models here.
class SkillAdmin(admin.ModelAdmin):
    list_display = ["name", "category", "display_order"]


class SubSkillAdmin(admin.ModelAdmin):
    list_display = ["name", "parent_skill", "built_with", "display_order"]


admin.site.register(Skill, SkillAdmin)
admin.site.register(SubSkill, SubSkillAdmin)
