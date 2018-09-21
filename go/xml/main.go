package main

import (
	"encoding/xml"
	"fmt"
)

var personXML = []byte(`
<person>
  <name>Luann Van Houten</name>
  <addresses>
    <address type="secondary">
      <street>321 MadeUp Lane</street>
      <city>Shelbyville</city>
    </address>
    <address type="primary">
      <street>123 Fake St</street>
      <city>Springfield</city>
    </address>
  </addresses>
</person>`)

type Person struct {
	Name string `xml:"name"`
	Addresses []struct {
		Street string `xml:"street"`
		City string `xml:"city"`
		Type string `xml;"type,attr"`
	} `xml:"addresses>address"`
}

func main() {
	var luann Person
	xml.Unmarshal(personXML, &luann)
	fmt.Println(luann)
}
