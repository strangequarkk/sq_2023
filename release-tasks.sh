#!/bin/bash  
echo "Release scripts:"  
pip install --no-cache-dir -r requirements.txt
python manage.py migrate
nodeenv env --with-npm
source env/bin/activate
echo "Release: node/npm installed and active?"
echo "current directory:"
echo "$PWD"
echo `dirname $(realpath $0)`
cp /etc/.env /strange_quark/.env
cd /strange_quark
echo "is env file present???"
ls
cd ../
cd sq-front
npm install
npm audit fix
npm run build
cd ../
python manage.py collectstatic --noinput 
echo "Release scripts complete!"  
  

