#!/bin/bash
java -cp . Server &
sleep 1
java -cp . Client
