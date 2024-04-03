"""
Django settings for strange_quark project.

Generated by 'django-admin startproject' using Django 4.2.6.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

from pathlib import Path
import dj_database_url
import os
from dotenv import load_dotenv

load_dotenv()
env = os.environ

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

BACKEND_DIR = BASE_DIR
FRONTEND_DIR = os.path.join(BASE_DIR, "sq-front/dist")


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = DJANGO_SECRET_KEY = env["DJANGO_SECRET_KEY"]

# GITHUB_WEBHOOK_KEY = env["A_WEBHOOK_KEY"]

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True  # env.get("DEBUG_STATUS", False)

# ALLOWED_HOSTS = []

ALLOWED_HOSTS = env.get("DJANGO_ALLOWED_HOSTS").split(" ")
# ALLOWED_HOSTS = CORS_ALLOWED_ORIGINS = json.loads(env.get("ALLOWED_ORIGINS"))

CORS_ORIGIN_ALLOW_ALL = bool(env.get("ALLOW_CORS", False))
# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
    "corsheaders",
    "resume",
    "skills",
    "reviews",
    "ckeditor",
    "ckeditor_uploader",
    "projects",
    "up",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]


SECURE_PROXY_SSL_HEADER = ("HTTP_X_SCHEME", "https")

ROOT_URLCONF = "strange_quark.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [FRONTEND_DIR],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "strange_quark.wsgi.application"

# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    "default": dj_database_url.config(default=f'sqlite:///{BASE_DIR / "db.sqlite3"}')
    # "default": {
    #     "ENGINE": "django.db.backends.sqlite3",
    #     "NAME": BASE_DIR / "db.sqlite3",
    # }
}


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = "/src/"
STATICFILES_DIRS = [FRONTEND_DIR]

STATICFILES_STORAGE = "whitenoise.storage.CompressedStaticFilesStorage"
STATIC_ROOT = BACKEND_DIR / "static"
WHITENOISE_ROOT = FRONTEND_DIR

CKEDITOR_UPLOAD_PATH = "./"
# CKEDITOR_STORAGE_BACKEND = str(BASE_DIR / "sq-front/src/assets")
MEDIA_ROOT = "./sq-front/public/assets"
MEDIA_URL = "/assets/"

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
