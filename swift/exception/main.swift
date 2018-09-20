
// https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html
enum VendingMachineError: Error {
    case invalidSection
    case insufficientFunds(coinsNeeded: Int)
    case outOfStock
}

do {
    throw VendingMachineError.insufficientFunds(coinsNeeded: 5)
} catch VendingMachineError.insufficientFunds(let coinsNeeded) {
    print("Insufficient funds. Please insert an additional \(coinsNeeded) coins.")
} catch {
    print("Unexpected error: \(error).")
}
