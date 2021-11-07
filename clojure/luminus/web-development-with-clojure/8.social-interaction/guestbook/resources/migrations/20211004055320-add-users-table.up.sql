CREATE TABLE users
(login text PRIMARY KEY,
password text not null,
created_at TIMESTAMP not null DEFAULT now());