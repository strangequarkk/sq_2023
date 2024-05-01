from django.db import models
from ckeditor.fields import RichTextField


# Single entry in "experience" section
class ResumeItem(models.Model):
    employer = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = RichTextField()
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.employer

    class Meta:
        ordering = ["-end_date"]
