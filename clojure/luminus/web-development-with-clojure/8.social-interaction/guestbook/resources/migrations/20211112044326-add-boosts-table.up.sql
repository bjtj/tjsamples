CREATE TABLE boosts
(user_id text not null references users(login) ON DELETE cascade
ON UPDATE cascade,
post_id integer not null references posts(id) ON DELETE cascade
ON UPDATE cascade,
poster text references users(login) ON DELETE cascade
ON UPDATE cascade,
timestamp timestamp not null DEFAULT now(),
PRIMARY KEY(user_id, post_id));
