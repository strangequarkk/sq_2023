from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ResumeItemSerializer
from .models import ResumeItem
from django.views.generic import TemplateView


# # Create your views here.
# class ResumeView(viewsets.ModelViewSet):
#     serializer_class = ResumeItemSerializer
#     queryset = ResumeItem.objects.all()


catchall = TemplateView.as_view(template_name="index.html")
