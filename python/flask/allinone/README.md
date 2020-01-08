# Flask #

http://flask.pocoo.org/

```
pip install -r requirements.txt
python server.py
```

# Blueprint #

http://flask.pocoo.org/docs/1.0/blueprints/



# abort message #

https://stackoverflow.com/a/21301229/5676460

`description` attribute

```
@app.errorhandler(400)
def custom400(error):
    response = jsonify({'message': error.description})
    # etc.

abort(400, 'custom error message to appear in body')
```
