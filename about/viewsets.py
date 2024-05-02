from rest_framework import viewsets
from about.models import About
from about.serializers import AboutSerializer


class AboutViewSet(viewsets.ModelViewSet):
    serializer_class = AboutSerializer

    def get_queryset(self):
        return About.objects.all()
