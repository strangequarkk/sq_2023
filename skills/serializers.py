from rest_framework import serializers
from skills.models import Skill, SubSkill


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ["name", "display_order"]


class SubSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubSkill
        fields = ["name", "parent_skill", "built_with", "display_order"]
