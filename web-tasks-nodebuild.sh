#!/bin/bash  
source env/bin/activate 
cd sq-front
npm run build
cd ../
python manage.py collectstatic --noinput 