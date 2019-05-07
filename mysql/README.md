

## alter table add column

* https://stackoverflow.com/a/17541485
    * adding multiple columns
* https://stackoverflow.com/a/3569372
    * not null + default value

e.g.)

```
ALTER TABLE `table1` ADD COLUMN `column2` text not null DEFAULT "" AFTER `column1`;
```


# To access newer versions of mysql/mariadb after as the root user #

* https://stackoverflow.com/a/35748657

```
$ sudo mysql -u root -p
```

## Grant All to new user ##

```
GRANT ALL PRIVILEGES on *.* to '<username>'@'localhost' IDENTIFIED BY '<password>';
FLUSH PRIVILEGES;
```
