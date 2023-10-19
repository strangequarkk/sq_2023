from rest_framework import routers
from resume.viewsets import ResumeViewSet

router = routers.SimpleRouter()
router.register(r"resume", ResumeViewSet, basename="resume")
