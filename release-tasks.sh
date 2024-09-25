#!/bin/bash  
echo "Release scripts:"  
python manage.py migrate
cd sq-front
nodeenv --version
nodeenv env --with_npm=True
. env/bin/activate
node -v
npm -v
npm run build
cd ../
python manage.py collectstatic --noinput 
echo "Release scripts complete!"  
  

