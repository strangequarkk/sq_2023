from django.contrib import admin
from .models import Review


# Register your models here.
class ReviewAdmin(admin.ModelAdmin):
    list_display = ["title", "student", "message", "lessons"]


admin.site.register(Review, ReviewAdmin)
