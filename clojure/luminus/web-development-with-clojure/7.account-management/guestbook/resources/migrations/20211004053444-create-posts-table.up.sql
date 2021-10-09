CREATE TABLE posts
(id SERIAL PRIMARY KEY,
name text not null,
message text not null,
timestamp TIMESTAMP not null DEFAULT now());