def fizz_buzz(n):
    for i in range(1, n + 1):
    	s = ""
	if i % 3 == 0:
	   s += "Fizz"
	if i % 5 == 0:
	   s += "Buzz"
	print(s if s else i)


fizz_buzz(20)
