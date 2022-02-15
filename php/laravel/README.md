# Installing postgresql on macosx #

## Using a LaunchAgent and plist to Launch PostgreSQL on Startup ##

<https://chartio.com/resources/tutorials/how-to-start-postgresql-server-on-mac-os-x/>

```
$ brew install postgresql
```

```
$ mkdir -p ~/Library/LaunchAgents
```

```
$ ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents
```

```
$ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
```

## Getting Started with PostgreSQL on Mac OSX ##

<https://www.codementor.io/@engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb>

<https://www.codementor.io/@engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb#3-configuring-postgres>

```
psql postgres
```

```
postgres=# \du
```

## A. Creating Users ##


let’s set the password for the default `postgres` account—by default, it has no password.

```
postgres=# \password postgres
```

## `ERROR: role "postgres" does not exist` ##

<https://stackoverflow.com/a/15309551>

If you installed Postgres from homebrew then you need to run `/usr/local/opt/postgres/bin/createuser -s postgres` in your terminal


# Installing laravel on macosx #

```
brew install php
```

terminal 재시작

## Download Composer ##

<https://getcomposer.org/download/>

```shell
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '906a84df04cea2aa72f40b5f787e49f22d4c2f19492ac310e8cba5b96ac8b64115ac402c8cd292b8a03482574915d1a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

<https://getcomposer.org/doc/00-intro.md#globally>

```shell
mv composer.phar /usr/local/bin/composer
```


## The Laravel Installer ##

<https://laravel.com/docs/8.x/installation#the-laravel-installer>

```shell
composer global require laravel/installer
```

`$PATH` 에 추가

* macOS: `$HOME/.composer/vendor/bin`
* Windows: `%USERPROFILE%\AppData\Roaming\Composer\vendor\bin`
* GNU / Linux Distributions: `$HOME/.config/composer/vendor/bin` or `$HOME/.composer/vendor/bin`


e.g.)

```shell
laravel new example-app
cd example-app
php artisan serve
```

```shell
sudo apt install phpunit
sudo apt install php-tijsverkoyen-css-to-inline-styles
composer update --no-scripts
```
