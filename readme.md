## Wardrobe

Wardrobe is designed to be a very minimal blogging platform with the primary focus on writing. Currently it is a work in progress but you are free to give it a try. (Just be warned this alpha/beta quality). If you have any issues or ideas please report them.

![Wardobe](http://ericlbarnes.com/media/wardrobe-air.png)

## Installation

I will be adding a full download to make installation easier for those with out composer but for the time being please follow the below instructions.

First clone or download this repo and modify the following files:

* app/config/database.php
* app/config/mail.php -> For emails such as password reset
* app/config/wardrobe.php -> For the site theme and base settings

Next cd to the directory and run the following terminal commands:

    composer install

Finally visit http://site.com/install and follow the steps.

### Themes

All the theme files are in public/themes/default. You can duplicate this folder and then change the name in app/config/wardrobe.php if you wish to create your own. (Which I do recommend)

### License

Wardrobe is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
