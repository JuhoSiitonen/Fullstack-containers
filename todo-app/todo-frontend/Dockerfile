FROM node:16 as build-stage
ENV REACT_APP_BACKEND_URL="http://localhost:3000"
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm run build
RUN npm install -g serve
RUN CI=true npm test
CMD ["serve", "build"]