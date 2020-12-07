FROM nginx

EXPOSE 80

WORKDIR /usr/share/nginx/html/

RUN rm *

COPY ./web-build/ .
