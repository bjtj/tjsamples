HOST=0
PORT=8000

all: polls run


.PHONY: migrate
migrate:
	python manage.py migrate

.PHONY: run
run:
	python manage.py runserver


polls:
	python manage.py startapp $@

.PHONY: test
test:
	python manage.py runserver &
	sleep 1
	curl -fvL "localhost:8000/polls"

