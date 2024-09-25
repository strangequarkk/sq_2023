#!/bin/bash  
echo "Release scripts:"  
python manage.py migrate
cd sq-front
nodeenv env
. env/bin/activate
npm run build
cd ../
python manage.py collectstatic --noinput 
echo "Release scripts complete!"  
  

