(ns sample.core
  (:import
    [javax.swing SwingUtilities JFrame JLabel]))
 
(defn create-and-show-gui
  []
 
  (let [my-frame (doto (JFrame. "My Frame")
                   (.setDefaultCloseOperation JFrame/EXIT_ON_CLOSE))
        my-label (JLabel. "Hello UI")
        content-pane (.getContentPane my-frame)]
 
    (.add content-pane my-label)
    (.pack my-frame)
    (.setSize my-frame 500 500)
    (.setVisible my-frame true)))
 
 
(defn -main []
  (SwingUtilities/invokeLater create-and-show-gui))
