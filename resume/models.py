from django.db import models

from django_ckeditor_5.fields import CKEditor5Field


# Single entry in "experience" section
class ResumeItem(models.Model):
    employer = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    # description = RichTextField()
    description = CKEditor5Field("Text", config_name="basic")
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.employer

    class Meta:
        ordering = ["-end_date"]
