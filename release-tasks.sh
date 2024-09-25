#!/bin/bash  
echo "Release scripts:"  
python manage.py migrate
cd sq-front
nodeenv --version
nodeenv env --with-npm
echo "created nodeenv environment"
. env/bin/activate
echo "activated nodeenv environment"
node -v
npm -v
npm run build
cd ../
python manage.py collectstatic --noinput 
echo "Release scripts complete!"  
  

