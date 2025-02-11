#!/usr/bin/env bash

set -e

if [ -z $1 ] || [ -z $2 ]
then
    echo "usage: $(basename $0) <channel> <filename>"
    exit 1
fi


TOKEN=$(cat .token)
CHANNEL=$1
FILENAME=$2
FILELENGTH=$(stat -c%s "$FILENAME")

# !DEPRECATED
# curl -v \
#      -F file=@dramacat.gif \
#      -F "initial_comment=Shakes the cat" \
#      -F channels=$CHANNEL \
#      -H "Authorization: Bearer $TOKEN" \
#      https://slack.com/api/files.upload

# get upload url
RESP=$(curl --header "Authorization: Bearer $TOKEN" \
            --data-urlencode "filename=$FILENAME" \
            --data-urlencode "length=$FILELENGTH" \
            https://slack.com/api/files.getUploadURLExternal)

# echo $RESP

FILE_ID=$(jq --argjson j "$RESP" --raw-output -n '$j.file_id')
UPLOAD_URL=$(jq --argjson j "$RESP" --raw-output -n '$j.upload_url')

echo "File Id: $FILE_ID"
echo "Upload Url: $UPLOAD_URL"

# upload file
curl -v -F filename="@$FILENAME" $UPLOAD_URL

# complete
curl --header "Authorization: Bearer $TOKEN" \
     --data-urlencode "channel_id=$CHANNEL" \
     --data-urlencode "files=[{\"id\":\"$FILE_ID\"}]" \
     https://slack.com/api/files.completeUploadExternal

exit $?
