# Tutorial

* https://www.gnu.org/software/guile/docs/guile-tut/tutorial.html

* https://github.com/perryjer1/guile-tutorial


```
$ ./tortoise
scheme@(guile-user)> (define (draw-polygon! circumference vertices)
	(let ((side (/ circumference vertices))
		(angle (/ 360 vertices)))
	(let iterate ((i 1))
		(if (<= i vertices)
			(begin
				(tortoise-move side)
				(tortoise-turn angle)
				(iterate (1+ i)))))))
scheme@(guile-user)> (draw-polygon! 16 4)
scheme@(guile-user)> (tortoise-penup)
$1 = #t
scheme@(guile-user)> (tortoise-move 1)
$2 = (0.9999999999999992 6.432490598706545e-16)
scheme@(guile-user)> (tortoise-turn 30)
$3 = 390.00000000000006
scheme@(guile-user)> (tortoise-pendown)
$4 = #f
scheme@(guile-user)> (draw-polygon! 12 3)
scheme@(guile-user)> (tortoise-penup)
$5 = #t
scheme@(guile-user)> (tortoise-move -2)
$6 = (-0.7320508075688817 -0.9999999999999986)
scheme@(guile-user)> (tortoise-turn -100)
$7 = 650.0
scheme@(guile-user)> (tortoise-pendown)
$8 = #f
scheme@(guile-user)> (draw-polygon! 10 64)
scheme@(guile-user)> (define (koch-line length depth)
	(if (zero? depth)
		(tortoise-move length)
		(let ((sub-length (/ length 3))
			(sub-depth (1- depth)))
		(for-each (lambda (angle)
			(koch-line sub-length sub-depth)
			(tortoise-turn angle))
			'(60 -120 60 0)))))
scheme@(guile-user)> (define (snowflake length depth sign)
	(let iterate ((i 1))
		(if (<= i 3)
			(begin
				(koch-line length depth)
				(tortoise-turn (* sign -120))
				(iterate (1+ i))))))
scheme@(guile-user)> (snowflake 8 3 1)
scheme@(guile-user)> (tortoise-turn 180)
$9 = 829.999999999999
scheme@(guile-user)> (snowflake 8 3 -1)
scheme@(guile-user)> (tortoise-reset)
scheme@(guile-user)> (quit)
```
