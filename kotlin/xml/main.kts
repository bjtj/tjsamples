import java.io.*
import javax.xml.*
import javax.xml.parsers.*
import org.w3c.dom.*
import org.xml.sax.*
import org.xml.sax.helpers.*
import java.net.*

val xmlFile = File("./nyfeed.xml")

fun fetchXml() {
	var url = "https://rss.nytimes.com/services/xml/rss/nyt/World.xml"
	var xml = URL(url).readText()
	xmlFile.writeText(xml)
}

fun domParse() {
	var factory = DocumentBuilderFactory.newInstance()
	var builder = factory.newDocumentBuilder()
	var doc = builder.parse(File("./nyfeed.xml"))
	doc.documentElement.normalize()

	val list = doc.getElementsByTagName("item")
	for (i in 0 until list.length) {
		val node = list.item(i)
		if (node.nodeType == Node.ELEMENT_NODE) {
			val element = node as Element
			println("title: ${element.getElementsByTagName("title").item(0).textContent}")
			println("link: ${element.getElementsByTagName("link").item(0).textContent}")
			println("description: ${element.getElementsByTagName("description").item(0).textContent}")
			println("pubDate: ${element.getElementsByTagName("pubDate").item(0).textContent}")
			println()
		}
	}
}

fun saxParse() {
	var factory = SAXParserFactory.newInstance()
	var parser = factory.newSAXParser()
	var handler = object: DefaultHandler() {
		var currentElement = ""
		var title = ""
		var link = ""
		var description = ""
		var pubDate = ""
		override fun startElement(uri: String?, localName: String?, qName: String?, attributes: Attributes?) {
			currentElement = qName ?: ""
		}
		override fun characters(ch: CharArray?, start: Int, length: Int) {
			when (currentElement) {
				"title" -> title += String(ch!!, start, length)
				"link" -> link += String(ch!!, start, length)
				"description" -> description += String(ch!!, start, length)
				"pubDate" -> pubDate += String(ch!!, start, length)
			}
		}
		override fun endElement(uri: String?, localName: String?, qName: String?) {
			if (qName == "item") {
				println("title: $title")
				println("link: $link")
				println("description: $description")
				println("pubDate: $pubDate")
				println()
				title = ""
				link = ""
				description = ""
				pubDate = ""
			}
		}
	}
	parser.parse(File("./nyfeed.xml"), handler)
}


if (xmlFile.exists()) {
	println("File exists")
} else {
	println("File does not exist -- fetching...")
	fetchXml()
	println("File fetched")
}

println("============= DOM Parsing =============")
domParse()

println("============= SAX Parsing =============")
saxParse()
