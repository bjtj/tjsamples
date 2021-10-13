FROM ubuntu:latest
RUN apt-get update; apt-get install -y fortune
ADD fortuneloop.sh /bin/fortuneloop.sh
ENTRYPOINT /bin/fortuneloop.sh
