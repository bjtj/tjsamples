# https://stackoverflow.com/a/8223955


try:
    import urllib.parse as urlparse
except Exception:
    import urlparse


print(urlparse.urljoin('http://localhost', 'hello'))
print(urlparse.urljoin('http://localhost/a', 'b'))
print(urlparse.urljoin('http://localhost/a/', 'b'))

# http://localhost/hello
# http://localhost/b
# http://localhost/a/b
