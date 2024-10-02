#!/bin/bash  
source env/bin/activate
echo "node env activated?" 
node -v
npm -v
cd sq-front
# npm install
# npm audit fix
npm run build
cd ../
python manage.py collectstatic --noinput 