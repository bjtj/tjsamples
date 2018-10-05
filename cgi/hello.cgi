#!/bin/bash

echo "Content-Type: text/html"
echo ""

echo "<html><head><title>CGI Script</title></head><body>"
argument=$(echo "$QUERY_STRING" | sed "s|q=||")

echo "   QUERY STRING is: <b>$QUERY_STRING</b><br />"
echo "Actual argument is: <b>$argument</b><br />"
