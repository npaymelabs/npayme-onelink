FROM alpine:3.19.0

RUN apk --no-cache --update \
    add apache2 \
    apache2-ssl \
    curl \
    php82-apache2 \
    php82-bcmath \
    php82-bz2 \
    php82-calendar \
    php82-common \
    php82-ctype \
    php82-curl \
    php82-dom \
    php82-fileinfo \
    php82-gd \
    php82-iconv \
    php82-json \
    php82-mbstring \
    php82-mysqli \
    php82-mysqlnd \
    php82-openssl \
    php82-pdo_mysql \
    php82-pdo_pgsql \
    php82-pdo_sqlite \
    php82-phar \
    php82-session \
    php82-xml \
    php82-tokenizer \
    php82-zip \
    php82-xmlwriter \
    php82-redis \
    tzdata \
    npm \
    python3 py3-pip make

WORKDIR /app
COPY . .

COPY --from=composer:2.3.5 /usr/bin/composer /usr/bin/composer
COPY ../docker/entrypoint.dev.sh /entrypoint.dev.sh

RUN chmod +x /entrypoint.dev.sh

RUN ls -la /app

ENV PORT=8000
ENTRYPOINT [ "/entrypoint.dev.sh" ]