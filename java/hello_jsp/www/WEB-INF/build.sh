#!/bin/bash
mkdir -p classes
javac -cp java:$TOMCAT_HOME/lib/servlet-api.jar java/com/myapp/servlet/HelloServlet.java -d classes
