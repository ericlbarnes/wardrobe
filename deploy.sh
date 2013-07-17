#!/bin/sh
# Example Usage: sh deploy.sh v1.0.0

git clone git@github.com:ericbarnes/wardrobe.git wardrobe-deploy-$1
cd wardrobe-deploy-$1
rm -rf .git/
composer install --no-dev
rm -rf app/assets
rm -rf app/tests