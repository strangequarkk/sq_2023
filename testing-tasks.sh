#!/bin/bash  

python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
bash release-tasks.sh
gunicorn -b 127.0.0.1:8000 strange_quark.wsgi