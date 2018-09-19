// https://stackoverflow.com/a/24707744

enum NTS: CustomStringConvertible {
    case Alive, Update, Byebye

    var description: String {
        switch self {
        case .Alive: return "ssdp:alive"
        case .Update: return "ssdp:update"
        case .Byebye: return "ssdp:byebye"
        }
    }
}


print(NTS.Alive)

let nts = NTS.Update
print(nts)


// https://stackoverflow.com/a/38208335/5676460

enum Month : String {
    case jan = "January"
    case feb = "February"
    case mar = "March"
}

var month = Month(rawValue: "January")
print(month == Month.jan)

month = Month(rawValue: "February")
print(month == Month.feb)

month = Month(rawValue: "no")
print(month == nil)
print(month ?? "nil")
