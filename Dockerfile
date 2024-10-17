FROM python:3.11

WORKDIR /strange_quark


COPY requirements.txt .

COPY release-tasks.sh .
RUN ./release-tasks.sh

COPY . .

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]