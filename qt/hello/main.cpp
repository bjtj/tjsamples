#include <QtCore>
#include <QApplication>
#include <QWidget>
#include <iostream>

using namespace std;

int main(int argc, char *argv[])
{

    cout << "QT version: " << qVersion() << endl;
    
    QApplication app(argc, argv);
    QWidget window;
    window.resize(250, 150);
    window.setWindowTitle("Simple example");
    window.show();
    return app.exec();
}
