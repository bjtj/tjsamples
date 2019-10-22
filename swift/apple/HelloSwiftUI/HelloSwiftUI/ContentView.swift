//Copyright © 2019 tj. All rights reserved.

import SwiftUI

struct ContentView: View {
    
    var body: some View {
        NavigationView {
        List() {
            Text("Hello")
            Text("Hello")
            Text("Hello")
        }.navigationBarTitle("Menu")
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
