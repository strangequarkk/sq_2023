from django.db import models


class Review(models.Model):
    title = models.CharField(max_length=30)
    message = models.TextField()
    student = models.CharField(max_length=30)
    lessons = models.IntegerField(default=0, null=True, blank=True)

    def __str__(self):
        return self.title
