# Utilisez une image PHP avec Apache
FROM php:8.1-apache

# Mettez à jour les paquets et installez les extensions PHP nécessaires
RUN apt-get update && apt-get install -y \
        librabbitmq-dev \
        && docker-php-ext-install -j$(nproc) pdo pdo_mysql \
        && pecl install amqp \
        && docker-php-ext-enable amqp

# Installer l'extension sockets
RUN docker-php-ext-install sockets

# Activez Apache mod_rewrite
RUN a2enmod rewrite

# Copiez les fichiers de votre projet Symfony dans le conteneur
COPY . /var/www/html

# Installez Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Exécutez Composer pour installer les dépendances (assurez-vous que votre fichier composer.json est dans le répertoire)
RUN composer install --no-dev --optimize-autoloader

# Donnez les droits nécessaires aux dossiers var et vendor
RUN chown -R www-data:www-data /var/www/html/var /var/www/html/vendor

# Nettoyez les paquets inutiles et les caches
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Exécutez 'ls' pour lister les fichiers dans le répertoire racine, puis démarrez Apache
CMD tail -f /dev/null
