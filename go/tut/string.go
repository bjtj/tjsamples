package main

import (
	"fmt"
	"strings"
)


func main() {

	// contains
	fmt.Println(strings.Contains("seafood", "foo"))

	// upper case
	fmt.Println(strings.ToUpper("SeaFood"))

	// lower case
	fmt.Println(strings.ToLower("SeaFood"))

	// capitalize (or title)
	fmt.Println(strings.Title("aBc dEf"))

	// trim
	fmt.Println(strings.TrimSpace("  trim  "))

	// split
	fmt.Println(strings.Split("a,b,c,", ","))

	// split lines
	fmt.Println(strings.Split(`line 1
line 2
line 3`, "\n"))

	// is empty
	// - https://stackoverflow.com/a/18595217
	fmt.Println(len("") > 0)
	fmt.Println("" != "")

	// substring
	fmt.Println("seafood"[2:5])

	// reverse
	// - https://stackoverflow.com/a/10030772
	fmt.Println(Reverse("seafood"))

	// length
	fmt.Println(len("seafood"))

	// join
	s := []string{"a", "b", "c"}
	fmt.Println(strings.Join(s, ", "))
	fmt.Println(strings.Join([]string{"item1", "item2", "item3"}, ", "))
}

func Reverse(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes) - 1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}
