<?php namespace Wardrobe\Facades;

use Illuminate\Support\Facades\Facade;

class WardrobeFacade extends Facade {

    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor() { return 'Wardrobe'; }

}