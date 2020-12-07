FROM nginx

RUN mkdir /app

EXPOSE 80

WORKDIR /app

COPY ./web-build/ .
