package com.example.xmlserialization

import android.annotation.SuppressLint
import android.os.Bundle
import android.util.Xml
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.recyclerview.widget.RecyclerView
import org.xmlpull.v1.XmlPullParser
import org.xmlpull.v1.XmlPullParserFactory
import java.io.BufferedReader
import java.io.InputStreamReader
import java.io.StringWriter

class MainActivity : AppCompatActivity() {

    data class Book(var id: String?, var title: String?, var author: String?)

    @SuppressLint("SetTextI18n")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }
        val list = read()

        val recyclerView = findViewById<RecyclerView>(R.id.recyclerView)
        val adapter = GenericListAdapter(
            list,
            android.R.layout.simple_list_item_1,
            onBind = { view, data, _ ->
                view.findViewById<TextView>(android.R.id.text1).apply {
                    text = "Book[${data.id}]: ${data.title} by ${data.author}"
                    setPadding(8, 16, 8, 16)
                }
            }
        )
        recyclerView.adapter = adapter

        val serialized = serialize(list)
        val serializedText = findViewById<TextView>(R.id.serializedText)
        serializedText.text = serialized
    }

    private fun read(): List<Book> {

        val list = mutableListOf<Book>()

        val reader = BufferedReader(InputStreamReader(assets.open("books.xml")))
        val factory = XmlPullParserFactory.newInstance()
        val parser = factory.newPullParser()
        parser.setInput(reader)
        var inBook = false
        var id: String? = null
        var title: String? = null
        var author: String? = null
        while (parser.next() != XmlPullParser.END_DOCUMENT) {
            if (parser.eventType == XmlPullParser.START_TAG) {
                if (parser.name == "book") {
                    inBook = true
                    id = parser.getAttributeValue(null, "id")
                }

                if (inBook && parser.name == "title") {
                    title = parser.nextText()
                }

                if (inBook && parser.name == "author") {
                    author = parser.nextText()
                }
            }
            if (parser.eventType == XmlPullParser.END_TAG) {
                if (parser.name == "book") {
                    inBook = false
                    println("Book[$id]: $title by $author")
                    list.add(Book(id, title, author))
                }
            }
        }
        return list
    }

    private fun serialize(list: List<Book>): String {
        val writer = StringWriter()
        val serializer = Xml.newSerializer()
        serializer.setOutput(writer)
        serializer.startDocument(null, true)
        serializer.startTag(null, "catalog")
        list.forEach {
            val id = it.id
            val title = it.title
            val author = it.author
            serializer.startTag(null, "book")
            serializer.attribute(null, "id", id)
            serializer.startTag(null, "title")
            serializer.text(title)
            serializer.endTag(null, "title")
            serializer.startTag(null, "author")
            serializer.text(author)
            serializer.endTag(null, "author")
            serializer.endTag(null, "book")
        }
        serializer.endTag(null, "catalog")
        serializer.endDocument()

        return writer.toString()
    }

}