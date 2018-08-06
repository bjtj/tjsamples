CXXFLAGS = -I$(BOX2D_HOME)
LIBS = $(BOX2D_HOME)/Build/gmake/bin/Debug/libBox2D.a $(BOX2D_HOME)/Build/gmake/bin/Debug/libGLUI.a -lX11 -lGL -lGLU -lglut -lGLEW -lglfw -lX11 -lXxf86vm -lpthread -lXrandr -lXi

all:
	g++ -o hello main.cpp $(CXXFLAGS) $(LIBS)
