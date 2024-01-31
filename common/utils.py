import os
import subprocess


# builds the vite project and then collects static files for django
def build_and_collect():
    subprocess.run(["npm", "run", "build"], cwd=os.getcwd() + "/sq-front")
    subprocess.run(
        ["python3", "manage.py", "collectstatic", "--noinput"], cwd=os.getcwd()
    )
