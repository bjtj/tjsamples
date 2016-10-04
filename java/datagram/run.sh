#!/bin/bash
java -cp . Receiver &
sleep 1
java -cp . Sender
