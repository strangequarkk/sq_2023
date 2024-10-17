FROM python:3.11

WORKDIR /


COPY requirements.txt .

COPY release-tasks.sh .


COPY . .
RUN ./release-tasks.sh

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]