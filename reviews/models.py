from django.db import models


# Generates a review card with the review's heading, message, student name, and number of lessons the student had
class Review(models.Model):
    title = models.CharField(max_length=200)
    message = models.TextField()
    student = models.CharField(max_length=30)
    lessons = models.IntegerField(default=0, null=True, blank=True)

    def __str__(self):
        return self.title
