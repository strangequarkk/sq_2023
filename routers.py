from rest_framework import routers
from resume.viewsets import ResumeViewSet

router = routers.SimpleRouter()
router.register("resume", ResumeViewSet, basename="resume")
