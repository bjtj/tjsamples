# scotty example #

<https://github.com/scotty-web/scotty>

## Build ##

``` shell
cabal build
```

## Run ##

``` shell
cabal run
```

## Test ##

``` shell
curl http://localhost:3000/Hello
# <h1>Hello World!</h1>
```

or

``` shell
curl -v http://localhost:3000/Hello
* Host localhost:3000 was resolved.
* IPv6: ::1
* IPv4: 127.0.0.1
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying [::1]:3000...
*   Trying 127.0.0.1:3000...
* Connected to localhost (127.0.0.1) port 3000
* using HTTP/1.x
> GET /Hello HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.10.1
> Accept: */*
> 
* Request completely sent off
< HTTP/1.1 200 OK
< Transfer-Encoding: chunked
< Date: Thu, 20 Feb 2025 14:04:24 GMT
< Server: Warp/3.4.7
< Content-Type: text/html; charset=utf-8
< 
{ [34 bytes data]
100    21    0    21    0     0     96      0 --:--:-- --:--:-- --:--:--    96
* Connection #0 to host localhost left intact
<h1>Hello World!</h1>
```
