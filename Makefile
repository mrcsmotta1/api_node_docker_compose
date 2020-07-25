include .env

.PHONY: up

up:
		docker-compose up -d
		$(info ************  [${DB_NAME}] ************)

.PHONY: down

down:
		docker-compose down

.PHONY: stop

stop:
		docker-compose stop


.PHONY: logs

logs:
		docker-compose logs -f

.PHONY: test

test:
		docker-compose -f docker-compose.yml config


