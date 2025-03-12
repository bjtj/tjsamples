# Filament #

## Installation ##

<https://filamentphp.com/docs/3.x/panels/installation>

- PHP 8.1+
- Laravel v10.0+
- Livewire v3.0+

``` shell
laravel new my-app
# select `livewire` for frontend and default to others
```

``` shell
cd my-app
composer require filament/filament -W
php artisan filament:install --panels
```

### Required Extensions ###

- intl
- fileinfo
- zip

e.g.) php.ini

``` ini
extension=fileinfo
extension=intl
extension=zip
```

### illuminate/console[v10.17.0, ..., v10.48.28] require nunomaduro/termwind ^1.13 -> found nunomaduro/termwind[v1.13.0, ..., v1.17.0] but these were not loaded, likely because it conflicts with another require. ###

<https://github.com/filamentphp/filament/issues/13360#issuecomment-2184205181>

``` shell
composer require filament/filament -W 
```

## Panel Builder - Getting started ##

### Setting up the database and models ###

``` shell
php artisan make:model Owner -m
php artisan make:model Patient -m
php artisan make:model Treatment -m
```
