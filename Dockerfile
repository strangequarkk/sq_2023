FROM python:3.11

WORKDIR /


COPY requirements.txt .

COPY release-tasks.sh .


COPY . .
COPY /../.env /strange_quark/.env
RUN ./release-tasks.sh

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]