from rest_framework import viewsets
from skills.models import Skill, SubSkill
from skills.serializers import SkillSerializer, SubSkillSerializer


class SkillViewSet(viewsets.ModelViewSet):
    serializer_class = SkillSerializer

    def get_queryset(self):
        return Skill.objects.all()


class SubSkillViewSet(viewsets.ModelViewSet):
    serializer_class = SubSkillSerializer

    def get_queryset(self):
        return SubSkill.objects.all()
