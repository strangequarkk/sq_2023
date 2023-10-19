from django.db import models


# Create your models here.
class ResumeItem(models.Model):
    employer = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.employer
