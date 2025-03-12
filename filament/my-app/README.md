# Filament Example #

## php.ini ##

``` ini
extension=fileinfo
extension=intl
extension=zip
```

Database Driver

e.g.) sqlite

``` ini
;extension=pdo_mysql
;extension=pdo_odbc
;extension=pdo_pgsql
extension=pdo_sqlite
;extension=pgsql
```

## steps ##

```shell
laravel new my-app
cd my-app
composer require filament/filament -W
php artisan filament:install --panels
php artisan migrate
```

## run dev ##

``` shell
composer run dev
# npm run dev && php artisan serve
```

e.g.)

``` log
INFO  Server running on [http://127.0.0.1:8000].
```
