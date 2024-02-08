#!/bin/bash  
echo "Release scripts:"  
python manage.py migrate
cd sq-front
npm run build
cd ../
python manage.py collectstatic  
echo "Release scripts complete!"