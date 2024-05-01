from django.db import models


# Single entry in "experience" section
class ResumeItem(models.Model):
    employer = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(blank=True)

    def __str__(self):
        return self.employer
