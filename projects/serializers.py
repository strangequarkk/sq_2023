from rest_framework import serializers
from projects.models import Project, ProjectSkill, GalleryImage


class ProjectSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectSkill
        fields = ["skill"]


class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = ["image"]


class ProjectSerializer(serializers.ModelSerializer):
    project_skills = ProjectSkillSerializer(
        many=True, read_only=True, source="projectskill_set"
    )
    gallery_images = GalleryImageSerializer(
        many=True, read_only=True, source="galleryimage_set"
    )

    class Meta:
        model = Project
        fields = [
            "title",
            "description",
            "cover_image",
            "link",
            "cover_video",
            "project_skills",
            "gallery_images",
        ]
