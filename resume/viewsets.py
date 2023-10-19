from rest_framework import viewsets
from resume.models import ResumeItem
from resume.serializers import ResumeItemSerializer


class ResumeViewSet(viewsets.ModelViewSet):
    serializer_class = ResumeItemSerializer

    def get_queryset(self):
        return ResumeItem.objects.all()
