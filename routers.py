from rest_framework import routers
from resume.viewsets import ResumeViewSet
from skills.viewsets import SkillViewSet, SubSkillViewSet
from reviews.viewsets import ReviewViewSet

router = routers.SimpleRouter()
router.register("resume", ResumeViewSet, basename="resume")
router.register("skills", SkillViewSet, basename="skills")
router.register("subskills", SubSkillViewSet, basename="subskills")
router.register("subskills", SubSkillViewSet, basename="subskills")
router.register("reviews", ReviewViewSet, basename="skills")
