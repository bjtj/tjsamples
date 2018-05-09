import Foundation

// https://www.w3schools.com/xml/note.xml
let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" +
  "<note>" +
  "  <to>Tove</to>" +
  "  <from>Jani</from>" +
  "  <heading>Reminder</heading>" +
  "  <body>Don't forget me this weekend!</body>" +
  "</note>"

let dom = try XMLDocument(xmlString: xml)

// let dom = try XMLDocument(contentsOf: URL(string: "https://www.w3schools.com/xml/note.xml")!)

print(dom.rootElement()!)
