# Instructions

## Clone the project, cd into "client" folder and run

`$ yarn`

### Followed by

`$ yarn start`

### To start the front-end development server on port 3000

## cd into the "server" folder and run

`$ yarn `

### Create a docker container to run an instance of postgresql

`$ docker run --name <container-name> -e POSTGRES_PASSWORD:postgres -p 5432:5432 -d postgres`

### Create a database once the container is up, make sure to include its name in the "ormconfig.json" file

### Run migrations

`$ yarn typeorm migration:run`

### Run the following command to get the API running

`$ yarn dev:server`
