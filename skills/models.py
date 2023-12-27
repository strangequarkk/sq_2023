from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=30)
    category = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class SubSkill(models.Model):
    name = models.CharField(max_length=30)
    parent_skill = models.ForeignKey(Skill, on_delete=models.CASCADE)
    built_with = models.BooleanField(default=False)

    def __str__(self):
        return self.name
