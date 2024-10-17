FROM alpine:latest
WORKDIR /root

# add dependency
RUN apk add --update --no-cache libstdc++ ca-certificates curl jq
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories && apk add --update --no-cache libstdc++ ca-certificates


COPY ./build/me-chaind /usr/bin/me-chaind

EXPOSE 26656/tcp 26657/tcp 26660/tcp 9090/tcp 1317/tcp
VOLUME ["/root"]
ENTRYPOINT ["me-chaind"]
