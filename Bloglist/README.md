# Bloglistapp with Docker
This repo is for Fullstackopen Containers part. The app containerized here is the bloglistapp. There is a Docker compose file and by composing it with the command:

docker compose up --build

You can run the production version of the app and it will be reached at localhost:3000. 

To run the the development environment you can compose the dev version with command:

docker compose -f docker-compose.dev.yml up --build

