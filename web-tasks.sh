#!/bin/bash  
nodeenv -p --with-npm
gunicorn --workers 3 strange_quark.wsgi