from rest_framework import viewsets
from projects.models import Project, ProjectSkill, GalleryImage
from projects.serializers import (
    ProjectSerializer,
    ProjectSkillSerializer,
    GalleryImageSerializer,
)


class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        return Project.objects.all()


class ProjectSkillViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSkillSerializer

    def get_queryset(self):
        return ProjectSkill.objects.all()


class GalleryImageViewSet(viewsets.ModelViewSet):
    serializer_class = GalleryImageSerializer

    def get_queryset(self):
        return GalleryImage.objects.all()
