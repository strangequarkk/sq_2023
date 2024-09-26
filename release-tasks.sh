#!/bin/bash  
echo "Release scripts:"  
python manage.py migrate
#nodeenv -p --with-npm
nodeenv env
.env/bin/activate
cd sq-front
npm install
npm audit fix
# nodeenv env --with-npm
# . env/bin/activate
npm run build
cd ../
python manage.py collectstatic --noinput 
echo "Release scripts complete!"  
  

