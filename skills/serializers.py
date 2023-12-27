from rest_framework import serializers
from skills.models import Skill, SubSkill


class SubSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubSkill
        fields = ["name", "built_with", "display_order"]


class SkillSerializer(serializers.ModelSerializer):
    subskills = SubSkillSerializer(many=True, read_only=True, source="subskill_set")

    class Meta:
        model = Skill
        fields = ["name", "display_order", "subskills"]
