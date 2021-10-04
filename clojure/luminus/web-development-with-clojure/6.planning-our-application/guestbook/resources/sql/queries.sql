-- :name save-message! :! :n
-- :doc creates a new message using the name and message keys
INSERT INTO posts(name, message)
VALUES (:name, :message)
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