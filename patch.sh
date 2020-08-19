#!/usr/bin/env bash

# DIRS=("react/material/basic/"
#       "react/my-app/"
#       "react/the-road-to-learn-react/2.basics-in-react/hackernews/"
#       "react/calc/"
#       "react-native/first-project/"
#      )

# CMD="yarn upgrade websocket-extensions@^0.1.4"

DIRS=("react/the-road-to-learn-react/6.state-management-in-react/hackernews/"
      "react/the-road-to-learn-react/4.code-organization-and-testing/hackernews/"
      "react/the-road-to-learn-react/3.getting-real-with-apis/hackernews/"
      "react/redux/todo/"
      "react/react-express/client/"
      "react/material/basic/"
      "nodejs/express/rest/"
      "react/my-app/"
      "react/the-road-to-learn-react/2.basics-in-react/hackernews/"
      "react/calc/"
      "react-native/first-project/"
     )

CMD="yarn upgrade dot-prop@^4.2.1"

for i in ${DIRS[@]}; do
    echo $i
    pushd .
    cd $i
    $CMD
    popd
done
