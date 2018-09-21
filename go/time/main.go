// https://golang.org/pkg/time/

package main

import (
	"time"
)

func main() {
	start := time.Now()
	time.Sleep(time.Second)
	elapsed := time.Now().Sub(start)
	print(elapsed)
}
