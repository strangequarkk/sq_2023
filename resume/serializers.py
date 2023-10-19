from rest_framework import serializers
from resume.models import ResumeItem


class ResumeItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResumeItem
        fields = ["id", "employer", "title", "description", "start_date", "end_date"]
