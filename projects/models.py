from django.db import models

# from tinymce.models import HTMLField
from ckeditor_uploader.fields import RichTextUploadingField

upload_dest = "sq-front/src/assets"


class Project(models.Model):
    title = models.CharField(max_length=30)
    description = RichTextUploadingField()
    link = models.CharField(max_length=30)
    cover_image = models.ImageField(upload_to=upload_dest, blank=True)
    cover_video = models.FileField(upload_to=upload_dest, blank=True)

    def __str__(self):
        return self.title


class GalleryImage(models.Model):
    image = models.ImageField(upload_to=upload_dest)
    parent_project = models.ForeignKey(Project, on_delete=models.CASCADE)

    def __str__(self):
        return self.image


class ProjectSkill(models.Model):
    skill = models.CharField(max_length=30)
    parent_project = models.ForeignKey(Project, on_delete=models.CASCADE)

    def __str__(self):
        return self.skill
