module kr.tjsamples.rxjava.sample.hello.jfxhello {
    requires javafx.controls;
    requires javafx.fxml;

    opens kr.tjsamples.rxjava.sample.hello.jfxhello to javafx.fxml;
    exports kr.tjsamples.rxjava.sample.hello.jfxhello;
}
