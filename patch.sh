#!/usr/bin/env bash

DIRS=("react/material/basic/"
      "react/my-app/"
      "react/the-road-to-learn-react/2.basics-in-react/hackernews/"
      "react/calc/"
      "react-native/first-project/"
     )

CMD="yarn upgrade websocket-extensions@^0.1.4"

for i in ${DIRS[@]}; do
    echo $i
    pushd .
    cd $i
    $CMD
    popd
done
