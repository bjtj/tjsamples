#!/usr/bin/env bash

# DIRS=("react/material/basic/"
#       "react/my-app/"
#       "react/the-road-to-learn-react/2.basics-in-react/hackernews/"
#       "react/calc/"
#       "react-native/first-project/"
#      )

# CMD="yarn upgrade websocket-extensions@^0.1.4"

# DIRS=("react/the-road-to-learn-react/6.state-management-in-react/hackernews/"
#       "react/the-road-to-learn-react/4.code-organization-and-testing/hackernews/"
#       "react/the-road-to-learn-react/3.getting-real-with-apis/hackernews/"
#       "react/redux/todo/"
#       "react/react-express/client/"
#       "react/material/basic/"
#       "nodejs/express/rest/"
#       "react/my-app/"
#       "react/the-road-to-learn-react/2.basics-in-react/hackernews/"
#       "react/calc/"
#       "react-native/first-project/"
#      )

# CMD="yarn upgrade dot-prop@^4.2.1"

DIRS=(
    "react/the-road-to-learn-react/6.state-management-in-react/hackernews/"
    "react/the-road-to-learn-react/4.code-organization-and-testing/hackernews/"
    "react/the-road-to-learn-react/3.getting-real-with-apis/hackernews/"
    "react-native/graphics/masked/MaskedViewExample/"
    "react/redux/todo/"
    "react/react-express/client/"
    "react/material/basic/"
    "react-native/table/TableExample/"
    "react-native/storage/SqliteTutorial/"
    "react-native/storage/AsyncStorageTutorial/"
    "react-native/sidemenu/SideMenuTutorial/"
    "react-native/redux/rncreate/"
    "react-native/orientation/OrientationTutorial/"
    "react-native/navigation/GettingStarted/"
    "react-native/modal/ModalExample/"
    "react-native/learning-react-native/weather/"
    "react-native/learning-react-native/touch/"
    "react-native/learning-react-native/styles/"
    "react-native/learning-react-native/smarter_weather/"
    "react-native/learning-react-native/flashcards/"
    "react-native/learning-react-native/bestsellers/"
    "react-native/image-viewer/ImageViewerTutorial/"
    "react-native/gradient/GradientExample/"
    "react-native/gesture/PanResponderExample/"
    "react-native/gesture/GestureExample/"
    "react-native/geolocation/GeolocationExample/"
    "react-native/camera/ImagePickerExample/"
    "react-native/action-button/ActionButtonTutorial/"
    "react/my-app/"
    "react/the-road-to-learn-react/2.basics-in-react/hackernews/"
    "react/calc/"
    "react-native/first-project/"
    "react-native/ToDoList/" 
)

CMD="yarn upgrade handlebars@^4.5.3"


for i in ${DIRS[@]}; do
    echo $i
    pushd .
    cd $i
    $CMD
    popd
done
