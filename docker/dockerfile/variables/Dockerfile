FROM alpine:latest

RUN apk add --no-cache bash

COPY start.sh /
RUN chmod +x /start.sh

ENV _MYMSG=hello

# ENTRYPOINT ["/start.sh"]
ENTRYPOINT ["/bin/sh", "-c", "exec /start.sh $_MYMSG $0 $@"]
