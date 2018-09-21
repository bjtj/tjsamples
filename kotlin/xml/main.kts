import java.io.*
import javax.xml.*
import javax.xml.parsers.*
import org.w3c.dom.*
import org.xml.sax.*

fun readXml(): Document {
	var xmlFile = File("./items.xml")
	var factory = DocumentBuilderFactory.newInstance()
	var builder = factory.newDocumentBuilder()
	var xmlInput = InputSource(StringReader(xmlFile.readText()))
	var doc = builder.parse(xmlInput)
	return doc
}

println(readXml())
