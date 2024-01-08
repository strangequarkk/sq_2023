from rest_framework import routers
from resume.viewsets import ResumeViewSet
from skills.viewsets import SkillViewSet, SubSkillViewSet
from reviews.viewsets import ReviewViewSet
from projects.viewsets import ProjectViewSet, ProjectSkillViewSet, GalleryImageViewSet

router = routers.SimpleRouter()
router.register("resume", ResumeViewSet, basename="resume")
router.register("skills", SkillViewSet, basename="skills")
router.register("subskills", SubSkillViewSet, basename="subskills")
router.register("reviews", ReviewViewSet, basename="skills")
router.register("projects", ProjectViewSet, basename="projects")
router.register("projectskills", ProjectSkillViewSet, basename="projectskills")
router.register("galleryimages", GalleryImageViewSet, basename="galleryimages")
