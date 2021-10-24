CREATE TABLE media
(name text PRIMARY KEY,
owner text REFERENCES users(login) ON DELETE set null ON UPDATE CASCADE,
type text NOT NULL,
data bytea NOT NULL);
