## Wardrobe

Wardrobe is designed to be a very minimal blogging platform with the primary focus on writing. Currently it is a work in progress but you are free to give it a try. (Just be warned something may and will fail until I get it to the first official beta).

If you spot any issues or have any ideas please feel free to submit a pull request or file an issue report.

## Installation

I will be adding a full download to make installation easier for those with out composer but for the time being please follow the below instructions.

First clone or download this repo and modify the app/config/database.php with your database settings.

Next cd to the directory and run the following terminal commands:

    composer install

Finally visit http://site.com/install and follow the steps.

## Notes

Setup your site settings in the app/config directory.

1. mail.php -> For emails such as password reset
2. wardrobe.php -> For the site theme and base settings

### Development

To compile assets run the following:

    npm install
    grunt watch

### License

Wardrobe is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
