CREATE OR REPLACE VIEW reply_count AS
select p.id as id, count(c.id) AS reply_count
from posts p left join posts c on c.parent = p.id
group by p.id
--;;
CREATE OR replace view posts_with_replies as
select * from
(WITH RECURSIVE posts_with_replies AS
(WITH replies AS
(SELECT p.parent as parent,
p.id as id,
to_jsonb(pwm) as msg,
p.id as post_id
from posts p
left join posts_with_meta pwm
on p.id = pwm.id)
SELECT parent, id, msg, post_id
FROM replies
UNION
SELECT r.parent, r.id, r.msg, p.post_id
FROM replies r
INNER JOIN posts_with_replies p
ON r.id = p.parent)
SELECT post_id as id,
jsonb_agg(msg) as messages,
(array_agg(id))[count(id)] as root_id,
count(id) <> 1 as is_reply
FROM posts_with_replies
GROUP BY post_id) as pwr
--;;
ALTER VIEW posts_and_boosts rename to posts_and_boosts_no_replies
--;;
CREATE OR REPLACE VIEW posts_and_boosts AS
select
*
from posts_with_replies
inner join reply_count using (id)
inner join posts_and_boosts_no_replies using (id)
