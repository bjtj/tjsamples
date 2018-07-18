HOST=0
PORT=8000

all: polls run


run:
	python manage.py runserver


polls:
	python manage.py startapp polls


test:
	python manage.py runserver &
	sleep 1
	curl -fvL "localhost:8000/polls"

