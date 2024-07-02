# Quickstart #

<https://docs.xtdb.com/intro/getting-started.html>

## Docker Install ##

``` shell
docker run --pull=always -tip 6543:3000 ghcr.io/xtdb/xtdb-standalone-ea
```


## Run the `xtsql` interactive console ##

``` shell
# any recent version of Python should work, no Python knowledge required
curl -s https://docs.xtdb.com/xtsql.py -O && \
  python xtsql.py --url=http://localhost:6543
```
