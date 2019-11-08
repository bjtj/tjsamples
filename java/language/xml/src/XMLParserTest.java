import java.io.File;

import javax.xml.parsers.*;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

/**
 * XMLParserTest
 */
public class XMLParserTest {

	private final String XML_FILE_PATH = "nyfeed.xml";

	/**
	 * 
	 * @param args
	 * @throws Exception
	 */
	public static void main(String[] args) throws Exception {
		XMLParserTest xpt = new XMLParserTest();
		xpt.domParseTest();
		xpt.saxParseTest();
	}

	/**
	 * 
	 * @throws Exception
	 */
	public void domParseTest() throws Exception {

		System.out.println("==============================");
		System.out.println("domParseTest()");
		System.out.println("==============================");

		File xmlFile = new File(XML_FILE_PATH);

		DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
		DocumentBuilder db = dbf.newDocumentBuilder();
		Document doc = db.parse(xmlFile);

		doc.getDocumentElement().normalize();

		System.out.printf("Root element:%s\n", doc.getDocumentElement().getNodeName());
		NodeList itemNodeList = doc.getElementsByTagName("item");

		for (int s = 0; s < itemNodeList.getLength(); s++) {

			Node itemNode = itemNodeList.item(s);

			if (itemNode.getNodeType() == Node.ELEMENT_NODE) {

				Element itemElement = (Element)itemNode;

				NodeList titleNodeList = itemElement.getElementsByTagName("title");
				Element titleElement = (Element)titleNodeList.item(0);
				NodeList childTitleNodeList = titleElement.getChildNodes();
				System.out.printf("[title : %s]\n", ((Node)childTitleNodeList.item(0)).getNodeValue());

				NodeList linkNodeList = itemElement.getElementsByTagName("link");
				Element linkElement = (Element) linkNodeList.item(0);
				NodeList childLinkNodeList = linkElement.getChildNodes();
				System.out.printf("[link : %s]\n", ((Node)childLinkNodeList.item(0)).getNodeValue());
			}

		}
	}

	/**
	 * 
	 * @throws Exception
	 */
	public void saxParseTest() throws Exception {

		System.out.println("==============================");
		System.out.println("saxParseTest()");
		System.out.println("==============================");

		File xmlFile = new File(XML_FILE_PATH);

		SAXParser parser = SAXParserFactory.newInstance().newSAXParser();
		DefaultHandler dh = new DefaultHandler() {

				private boolean firstElement = true;
				private boolean inItem = false;
				private boolean inTitle = false;
				private boolean inLink = false;
				private StringBuilder characterSB;

				   @Override
				   public void startDocument() throws SAXException {
					   System.out.println("startDocument");
					   super.startDocument();
				   }

				   @Override
				   public void endDocument() throws SAXException {
					   System.out.println("endDocument");
					   super.endDocument();
				   }

				   @Override
				   public void startElement(String uri, String localName,
											String qName, Attributes attributes) throws SAXException {

					   if (firstElement) {
						   System.out.printf("Root element:%s\n", qName);
						   firstElement = false;
					   }

					   if (qName.equals("item")) {
						   inItem = true;
					   } else if (qName.equals("title")) {
						   inTitle = true;
					   } else if (qName.equals("link")) {
						   inLink = true;
					   }

					   if (inItem && (inTitle || inLink)) {
						   characterSB = new StringBuilder();
					   }

					   super.startElement(uri, localName, qName, attributes);
				   }

				   @Override
				   public void characters(char[] ch, int start, int length)
					   throws SAXException {

					   if (characterSB != null) {
						   characterSB.append(handleCharacters(ch, start, length));
					   }

					   super.characters(ch, start, length);
				   }

				   @Override
				   public void endElement(String uri, String localName, String qName)
					   throws SAXException {

					   if (characterSB != null) {
						   if (inItem && inTitle) {
							   System.out.printf("[title : %s]\n", characterSB.toString());
						   } else if (inItem && inLink) {
							   System.out.printf("[link : %s]\n", characterSB.toString());
						   }
						   characterSB = null;
					   }

					   if (qName.equals("item")) {
						   inItem = false;
					   } else if (qName.equals("title")) {
						   inTitle = false;
					   } else if (qName.equals("link")) {
						   inLink = false;
					   }

					   super.endElement(uri, localName, qName);
				   }


				/**
				 * 
				 * @param ch
				 * @param start
				 * @param end
				 * @return
				 */
				public String handleCharacters(char[] ch, int start, int length) {

					StringBuilder sb = new StringBuilder();
					for (int i = start; i < start + length; i++) {
						sb.append(ch[i]);
					}
					return sb.toString();
				}
			};
		parser.parse(xmlFile, dh);
	}
}

