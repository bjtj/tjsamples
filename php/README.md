# php #

<http://php.net/>

## php build-in server ##

<https://stackoverflow.com/a/4302028>

```
apt install php
php -S localhost:8000
curl -OL localhost:8000/hello.php
```

## php command line options ##

<http://php.net/manual/en/features.commandline.options.php>


# How to enable or disable PHP Modules on Ubuntu #

<https://tecadmin.net/enable-disable-php-modules-ubuntu/>


* **phpenmod** – Used to enable modules in PHP
* **phpdismod** – Used to disable modules in PHP
* **phpquery** – Used to view status of modules of PHP

e.g.

```
$ phpenmod mbstring
```

## `WARNING: Module mbstring ini file doesn't exist under /etc/php/7.2/mods-available` ##

<https://askubuntu.com/a/731380>

```
sudo apt-get install php7.2-mbstring
```
