from django.contrib import admin
from .models import ResumeItem


# Register your models here.
class ResumeItemAdmin(admin.ModelAdmin):
    list_display = ["employer", "title", "description", "start_date", "end_date"]


admin.site.register(ResumeItem, ResumeItemAdmin)
