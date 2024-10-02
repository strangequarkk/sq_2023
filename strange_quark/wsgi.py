"""
WSGI config for strange_quark project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
from common.utils import activate_nodeenv, build_and_collect

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "strange_quark.settings")

application = get_wsgi_application()
build_and_collect()
