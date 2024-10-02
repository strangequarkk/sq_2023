import os
import subprocess


# builds the vite project and then collects static files for django
def build_and_collect():
    print("build and collect static")
    # subprocess.run(["nodeenv", "-p"])
    subprocess.run(["node", "-v"])
    subprocess.run(["npm", "-v"])
    # subprocess.run(["nodeenv", "-p", "--with-npm"])
    # subprocess.run(["npm", "install"], cwd=os.getcwd() + "/sq-front")
    # subprocess.run(["npm", "audit", "fix"], cwd=os.getcwd() + "/sq-front")
    subprocess.run(["npm", "run", "build"], cwd=os.getcwd() + "/sq-front")
    subprocess.run(
        ["python3", "manage.py", "collectstatic", "--noinput"], cwd=os.getcwd()
    )


def activate_nodeenv():
    # subprocess.run(["ls"])
    # print("chmod on activation file")
    # subprocess.run(["chmod", "777", "env/bin/activate"])
    # print("*** ENV ACTIVATION FILE INFO ***")
    # subprocess.run(["stat", "env/bin/activate"])
    # print("i'm the one who owns this file, right???")
    # subprocess.run(["who"])

    # subprocess.run(["source", "env/bin/activate"])
    subprocess.run(["bash", "web-tasks.sh"])
