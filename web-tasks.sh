#!/bin/bash  
echo "-----WHERE ARE WE------"
ls
source env/bin/activate
echo "node env activated?" 
node -v
npm -v
cd sq-front
npm run build
cd ../
python manage.py collectstatic --noinput 