import Foundation

let text = "<tag>hello</tag>"

for (_, char) in text.enumerated() {
    if char == "<" {
        print("start tag")
    }
    if char == ">" {
        print("end tag")
    }
    print(char)
}


public struct Token {
    var type: String
    var text: String
}

func readTag(text: String) -> [Token] {

    var tokens = [Token]()
    var str = ""
    var startTag = false
    
    for (_, char) in text.enumerated() {

        if startTag == false && char == "<" {
            startTag = true
            tokens.append(Token(type: "content", text: str))
            str = ""
            continue
        }

        if char == ">" {
            startTag = false
            tokens.append(Token(type: "tag", text: str))
            str = ""
            continue
        }
        
        str.append(char)
    }
    if str.isEmpty == false {
        tokens.append(Token(type: "content", text: str))
    }
    return tokens
}

for token in readTag(text: text) {
    print("\(token.type) - \(token.text)")
}
    
