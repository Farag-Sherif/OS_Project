FROM nginx:alpine

COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY main.js /usr/share/nginx/html/

COPY image/ /usr/share/nginx/html/image/
COPY sound/ /usr/share/nginx/html/sound/
