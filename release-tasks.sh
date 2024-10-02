#!/bin/bash  
echo "Release scripts:"  
python manage.py migrate
nodeenv env --with-npm
source env/bin/activate
cd sq-front
npm install
npm audit fix
npm run build
cd ../
python manage.py collectstatic --noinput 
echo "Release scripts complete!"  
  

