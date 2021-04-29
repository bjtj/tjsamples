#!/usr/bin/env bash

DIRS=(
    "react/my-app/"
    "react/the-road-to-learn-react/2.basics-in-react/hackernews/"
    "react/calc/"
    "react/redux/todo/"
    "react/react-express/client/"
    "react/material/basic/"
    "react/the-road-to-learn-react/6.state-management-in-react/hackernews/"
    "react/the-road-to-learn-react/4.code-organization-and-testing/hackernews/"
    "react/the-road-to-learn-react/3.getting-real-with-apis/hackernews/" 
)

CMD="yarn upgrade sockjs@^0.3.20"


for i in ${DIRS[@]}; do
    echo $i
    pushd .
    cd $i
    $CMD
    popd
done
