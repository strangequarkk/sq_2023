from django.db import models
from common.utils import build_and_collect

# from ckeditor_uploader.fields import RichTextUploadingField
from django_ckeditor_5.fields import CKEditor5Field

upload_dest = "./"


class Project(models.Model):
    title = models.CharField(max_length=30)
    description = CKEditor5Field("Text", config_name="default")
    link = models.CharField(max_length=200)
    cover_image = models.ImageField(upload_to=upload_dest, blank=True)
    cover_video = models.FileField(upload_to=upload_dest, blank=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        super(Project, self).save(*args, **kwargs)
        # build frontend vite project into sq-front/dist, and then run collectstatic so all uploaded files are available
        build_and_collect()


# currently unused- may eventually implement, add a gallery of project screenshots etc
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
