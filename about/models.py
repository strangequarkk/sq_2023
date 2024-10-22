from django.db import models

# from ckeditor_uploader.fields import RichTextUploadingField
from django_ckeditor_5.fields import CKEditor5Field
from common.utils import build_and_collect

upload_dest = "./"


# Create your models here.
class About(models.Model):
    # content = RichTextUploadingField()
    content = CKEditor5Field("Text", config_name="default")

    def __str__(self):
        return self.content

    def save(self, *args, **kwargs):
        super(About, self).save(*args, **kwargs)
        # build frontend vite project into sq-front/dist, and then run collectstatic so all uploaded files are available
        build_and_collect()
