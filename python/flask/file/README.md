# Flask file upload #

## Testing ##

e.g.)

``` shell
curl -v --data-binary "@server.py" localhost:5000/api/upload
```

e.g.)

``` shell
curl -v --form "myfile=@server.py" localhost:5000/api/upload
```


## FileStorage ##

<https://werkzeug.palletsprojects.com/en/stable/datastructures/#werkzeug.datastructures.FileStorage>

- `stream`
- `filename`
- `name`
- `headers`
- `content_type`
- `content_length`
