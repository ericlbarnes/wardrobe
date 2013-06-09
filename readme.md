## Wardrobe

WIP

Run the following commands:

    composer install
    php artisan migrate --seed
    php artisan serve

Then visit http://localhost:8000/wardrobe#post

## Notes

Setup your site settings in the app/config directory.

1. mail -> For emails such as password reset
2. wardrobe -> For the site theme and base settings

### Development

To compile assets run the following:

    npm install
    grunt watch

### License

Wardrobe is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
