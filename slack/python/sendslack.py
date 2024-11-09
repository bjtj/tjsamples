#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sys
import time
import slack
from datetime import datetime

TOKEN=open('.token').readline()

def send_dm(user, data):
    client = slack.WebClient(token=TOKEN)
    response = client.conversations_open(users=[user])
    # print(response)
    response = client.chat_postMessage(channel=response.data['channel']['id'], text=data)
    # print(response)


def main():
    user = sys.argv[1]
    message = sys.argv[2]
    send_dm(user, message)


if __name__ == '__main__':
    main()
