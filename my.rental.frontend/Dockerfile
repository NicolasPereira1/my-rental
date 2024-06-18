FROM node:21-alpine as dev
EXPOSE 3000
RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
CMD ["npm", "run", "start"]

FROM dev as prod
RUN npm run build
RUN npm install serve
RUN shopt -s extglob && rm -v !("build")
RUN serve -s build
CMD [ "serve" -h" ]
