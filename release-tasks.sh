#!/bin/bash  

pip install --no-cache-dir -r requirements.txt
python3 manage.py migrate
nodeenv env --with-npm
source env/bin/activate
cd sq-front
npm install
npm audit fix
npm run build
cd ../
python3 manage.py collectstatic --noinput 