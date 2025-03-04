# Learn Rest API using Express.js and MySQL DB #

* https://www.codementor.io/julieisip/learn-rest-api-using-express-js-and-mysql-db-ldflyx8g2

```
yarn init -y
yarn add express
yarn add express mysql body-parser
yarn add -D nodemon
```


```
CREATE DATABASE mydb;
CREATE TABLE IF NOT EXISTS `tasks` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`task` varchar(200) NOT NULL,
`status` tinyint(1) NOT NULL DEFAULT '1',
`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(`id`)
);
INSERT INTO `tasks` (`id`, `task`, `status`, `created_at`) values
(1, 'Find bugs', 1, '2016-04-10 23:50:40'),
(2, 'Review code', 1, '2016-04-10 23:50:40'),
(3, 'Fix bugs', 1, '2016-04-10 23:50:40'),
(4, 'Refactor Code', 1, '2016-04-10 23:50:40'),
(5, 'Push to prod', 1, '2016-04-10 23:50:50');
```

