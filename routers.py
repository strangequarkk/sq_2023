from rest_framework import routers
from resume.viewsets import ResumeViewSet
from skills.viewsets import SkillViewSet, SubSkillViewSet

router = routers.SimpleRouter()
router.register("resume", ResumeViewSet, basename="resume")
router.register("skills", SkillViewSet, basename="skills")
router.register("subskills", SubSkillViewSet, basename="subskills")
