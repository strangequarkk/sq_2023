import os
import subprocess


# builds the vite project and then collects static files for django
def build_and_collect():
    print("build and collect static")
    subprocess.run(["bash", "web-tasks.sh"])
