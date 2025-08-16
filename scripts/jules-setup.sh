#!/usr/bin/env bash
set -euo pipefail

# This script is ONLY for Jules’ ephemeral environment, not for CI/infra.
apt-get update
DEBIAN_FRONTEND=noninteractive apt-get install -y \
  git unzip ca-certificates \
  php-cli php-fpm php-mbstring php-xml php-curl php-zip php-intl php-gd php-mysql \
  && rm -rf /var/lib/apt/lists/*

# Composer (if not available)
if ! command -v composer >/dev/null 2>&1; then
  php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
  php composer-setup.php --install-dir=/usr/local/bin --filename=composer
  rm composer-setup.php
fi

composer install --no-dev --prefer-dist -o
echo "[Jules Setup] Done."

