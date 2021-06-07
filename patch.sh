#!/usr/bin/env bash

DIRS=(
    "react/the-road-to-learn-react/6.state-management-in-react/hackernews/"
    "react/the-road-to-learn-react/4.code-organization-and-testing/hackernews/"
    "react/the-road-to-learn-react/3.getting-real-with-apis/hackernews/"
    "websocket/nodejs/quickstart/"
    "react/redux/todo/"
    "react/react-express/client/"
    "react/material/basic/"
    "react-native/learning-react-native/weather/"
    "react-native/learning-react-native/touch/"
    "react-native/learning-react-native/styles/"
    "react-native/learning-react-native/smarter_weather/"
    "react-native/learning-react-native/flashcards/"
    "react-native/learning-react-native/bestsellers/"
    "react-native/gesture/PanResponderExample/"
    "react-native/gesture/GestureExample/ "
    "react/the-road-to-learn-react/2.basics-in-react/hackernews/"
    "react/calc/"
    "react-native/ToDoList/"
)

CMD="yarn upgrade ws@^6.2.2"

for i in ${DIRS[@]}; do
    echo $i
    pushd .
    cd $i
    $CMD
    rm -rf node_modules
    popd
done
