ALTER TABLE posts
ADD COLUMN parent integer references posts(id);
