$h = "Hello"
$w = "world"
$h + " " + $w                   # Hello world

"$h $w"                         # Hello world

$st = @("Say hello", " world")
"$st"                           # Say hello  world

-join($h,$w)                    # Helloworld

$h,$w -join " "                 # Hello world

("Hello world").split("ll"" ")  # He
                                # 
                                # o
                                # wor
                                # d

("Hello world").split("ll"" ", 2) # He
                                  # lo world

("Hello world").Substring(2,5)  # llo w

("Hello world").Remove(2,3)     # He world

("Hello World").Replace("Hello","New") # New World

("Hello world").Contains("ll")  # True

("Hello world").IndexOf("ll")   # 2

("Hello world").CompareTo("Hello" + " " + "world") # 0

("Hello world").Equals("Hello" + " " + "world") # True


