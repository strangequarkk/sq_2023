from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=30)
    category = models.CharField(max_length=30, null=True, blank=True)
    display_order = models.IntegerField(default=0, null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ("display_order",)


class SubSkill(models.Model):
    name = models.CharField(max_length=30)
    parent_skill = models.ForeignKey(Skill, on_delete=models.CASCADE)
    built_with = models.BooleanField(default=False)
    display_order = models.IntegerField(default=0, null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ("display_order",)
