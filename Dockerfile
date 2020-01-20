FROM nginx

RUN mkdir -p /var/www/www.akaterra.co

COPY public /var/www/www.akaterra.co
COPY akaterra.co.conf /etc/nginx/conf.d/akaterra.co.conf