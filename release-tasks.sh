#!/bin/bash  
echo "Release scripts:"  
python manage.py migrate
nodeenv -p --with-npm
cd sq-front
# nodeenv env --with-npm
# . env/bin/activate
npm run build
cd ../
python manage.py collectstatic --noinput 
echo "Release scripts complete!"  
  

