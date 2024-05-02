from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField
from common.utils import build_and_collect

upload_dest = "./"


# Create your models here.
class About(models.Model):
    content = RichTextUploadingField()

    def __str__(self):
        return self.content

    def save(self, *args, **kwargs):
        super(About, self).save(*args, **kwargs)
        # build frontend vite project into sq-front/dist, and then run collectstatic so all uploaded files are available
        build_and_collect()
