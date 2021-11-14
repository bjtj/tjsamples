-- :name save-message! :<! :n
-- :doc creates a new message using the name and message keys
INSERT INTO posts(author, name, message)
VALUES (:author, :name, :message)
RETURNING *;

-- :name get-messages :? :*
-- :doc select all available messages
SELECT * from posts_with_meta

-- :name get-message :? :1
-- :doc selects a message
SELECT * from posts_with_meta
where id = :id

-- :name get-messages-by-author :? :*
-- :doc selects all messages posted by a user
SELECT * from posts_with_meta
WHERE author = :author

-- :name create-user!* :! :n
-- :doc creates a new user with the provided login and hashed password
INSERT INTO users
(login, password)
VALUES (:login, :password)

-- :name get-user-for-auth* :? :1
-- :doc selects a user for authentication
SELECT * FROM users
WHERE login = :login

-- :name set-profile-for-user* :<! :1
-- :doc sets a profile map for the specified user
UPDATE users
SET profile = :profile
WHERE :login = login
RETURNING *;

-- :name get-user* :? :1
-- :doc gets a user's publicly available information
SELECT login, created_at, profile FROM users
WHERE login = :login


-- :name save-file! :! :n
-- saves a file to the database
INSERT INTO media
(name, type, owner, data)
VALUES (:name, :type, :owner, :data)
ON CONFLICT (name) DO UPDATE
SET type = :type,
	data = :data
WHERE media.owner = :owner


-- :name get-file :? :1
-- Gets a file form the database
SELECT * FROM media
WHERE name = :name


-- :name set-password-for-user!* :! :n
UPDATE users
SET password = :password
WHERE login = :login


-- :name delete-user!* :! :n
DELETE FROM users
WHERE login = :login


-- :name boost-post! :! :n
-- Boosts a post, or moves a boost to the top of the user's timeline
INSERT INTO boosts
(user_id, post_id, poster)
VALUES (:user, :post, nullif(:poster, :user))
ON CONFLICT (user_id, post_id) DO UPDATE
SET timestamp = now()
WHERE boosts.user_id = :user
AND boosts.post_id = :post


-- :name boosters-of-post :? :*
-- Get all boosters of a post
SELECT user_id as user from boosts
WHERE post_id = :post


-- :name get-reboosts :? :*
-- Gets all boosts descended from a given boost
WITH RECURSIVE reboosts AS
(WITH post_boosts AS
(SELECT user_id, poster
FROM boosts
WHERE post_id = :post)
SELECT user_id, poster
FROM post_boosts
where user_id = :user
UNION
SELECT b.user_id, b.poster
FROM post_boosts b INNER JOIN reboosts r ON r.user_id = b.poster)
select user_id as user, poster as source from reboosts

-- :name get-boost-chain :? :*
-- Gets all boosts above the original boost
WITH RECURSIVE reboosts AS
(WITH post_boosts AS
(SELECT user_id, poster
FROM boosts
WHERE post_id = :post)
SELECT user_id, poster
FROM post_boosts
where user_id = :user
UNION
SELECT b.user_id, b.poster
FROM post_boosts b INNER JOIN reboosts r ON r.poster = b.user_id)
select user_id as user, poster as source from reboosts

-- :name get-timeline :? :*
-- Gets the latest post or boost for each post
select * from
(select distinct on (p.id) * from posts_and_boosts as p
order by p.id, p.posted_at desc) as t
order by t.posted_at asc

-- :name get-timeline-for-poster :? :*
-- Gets the latest post or boost for each post
select * from
(select distinct on (p.id) * from posts_and_boosts as p
where p.poster = :poster
order by p.id, p.posted_at desc) as t
order by t.posted_at asc

-- :name get-timeline-post :? :1
-- Gets the boosted post for updating timelines
select * from posts_and_boosts
where is_boost = :is_boost
and poster = :user
and id = :post
order by posted_at asc
limit 1
