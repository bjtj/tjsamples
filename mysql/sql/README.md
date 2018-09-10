## Install mysql on ubuntu

* https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-16-04

```
$ mysql_secure_installation
```

### `No directory, logging in with HOME=/`

* https://askubuntu.com/a/738079

```
usermod -d /var/lib/mysql/ mysql
```

## Execute sql file

* https://dev.mysql.com/doc/refman/8.0/en/mysql-batch-commands.html

```
mysql> create schema mydb;
mysql> use mydb;
mysql> source <sql file>
```
