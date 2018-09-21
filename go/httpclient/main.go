package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)

func main() {
	res, _ := http.Get("http://example.com")
	body, _ := ioutil.ReadAll(res.Body)
	fmt.Printf("%s", body)
}

