# python setup.py install

* https://docs.python.org/3/install/index.html

## stackoverflow - python setup.py hello example

* https://stackoverflow.com/a/22188676

# Packaging

* https://packaging.python.org/tutorials/packaging-projects/

Prerequisite

* pypi account


```
pip install -U setuptools wheel twine
```

```
python setup.py sdist bdist_wheel
```

```
twine upload --repository-url https://test.pypi.org/legacy/ dist/*
twine upload dist/*
```
