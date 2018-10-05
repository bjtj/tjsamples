# Apache cgi

* https://httpd.apache.org/docs/trunk/ko/howto/cgi.html


## Apache cgi enable

* https://askubuntu.com/a/403992

```
sudo a2enmod cgi
sudo service apache2 restart
```

place the cgi file to /usr/lib/cgi-bin/

e.g.)
hello.cgi


## Test

```
curl localhost/cgi-bin/hello.cgi
curl localhost/cgi-bin/hello.cgi?q=wow
```

