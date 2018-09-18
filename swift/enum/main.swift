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
