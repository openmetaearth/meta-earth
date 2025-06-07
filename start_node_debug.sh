#!/bin/sh


. $(dirname "$0")/start_localnode.sh init
dlv --continue --accept-multiclient --api-version=2 --headless --listen=:4000 exec /usr/local/bin/med start