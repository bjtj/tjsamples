-- :name save-message! :<! :n
-- :doc creates a new message using the name and message keys
INSERT INTO posts(author, name, message)
VALUES (:author, :name, :message)
RETURNING *;

-- :name get-messages :? :*
-- :doc select all available messages
SELECT * from posts

-- :name create-user!* :! :n
-- :doc creates a new user with the provided login and hashed password
INSERT INTO users
(login, password)
VALUES (:login, :password)
-- :name get-user-for-auth* :? :1
-- :doc selects a user for authentication
SELECT * FROM users
WHERE login = :login

-- :name get-messages-by-author :? :*
-- :doc selects all messages posted by a user
SELECT * FROM posts
WHERE author = :author


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
