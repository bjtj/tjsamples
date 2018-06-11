import Foundation

func test() throws {

    // https://www.w3schools.com/xml/note.xml
    let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" +
      "<note>" +
      "  <to>Tove</to>" +
      "  <from>Jani</from>" +
      "  <heading>Reminder</heading>" +
      "  <body>Don't forget me this weekend!</body>" +
      "</note>"

    let dom = try XMLDocument(xmlString: xml)
    
    print(dom.rootElement()!)

    print(dom.rootElement()!.elements(forName: "from"))

    print(dom.rootElement()!.elements(forName: "body")[0])
}

func test2() throws {
    let url = URL(string: "https://www.w3schools.com/xml/note.xml")
    print("url: \(url!)")
    let dom = try XMLDocument(contentsOf: url!)
    
    print(dom.rootElement()!)
}

do {
    try test()
} catch {
    print("fail")
}
do {
    try test2()
} catch {
    print("fail")
}
