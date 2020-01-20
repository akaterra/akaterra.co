FROM nginx

RUN mkdir -p /var/www/www.akaterra.co

COPY apidog /var/www/www.akaterra.co/apidog

RUN mkdir -p /etc/nginx/sites-enabled

COPY akaterra.co.conf /etc/nginx/conf.d/akaterra.co.conf