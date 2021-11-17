DROP VIEW IF EXISTS posts_and_boosts
--;;
ALTER VIEW posts_and_boosts_no_replies rename to posts_and_boosts
--;;
DROP VIEW IF EXISTS posts_with_replies
--;;
DROP VIEW IF EXISTS reply_count
