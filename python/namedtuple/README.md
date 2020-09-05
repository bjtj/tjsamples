# namedtuple #

<https://docs.python.org/3/library/collections.html#collections.namedtuple>

```
>>> # Basic example
>>> Point = namedtuple('Point', ['x', 'y'])
>>> p = Point(11, y=22)     # instantiate with positional or keyword arguments
>>> p[0] + p[1]             # indexable like the plain tuple (11, 22)
33
>>> x, y = p                # unpack like a regular tuple
>>> x, y
(11, 22)
>>> p.x + p.y               # fields also accessible by name
33
>>> p                       # readable __repr__ with a name=value style
Point(x=11, y=22)
```


## default parameters ##

<https://stackoverflow.com/a/18348004/5676460>

Python 3.7

```
>>> from collections import namedtuple
>>> fields = ('val', 'left', 'right')
>>> Node = namedtuple('Node', fields, defaults=(None,) * len(fields))
>>> Node()
Node(val=None, left=None, right=None)
```

Before Python 3.7

```
>>> from collections import namedtuple
>>> Node = namedtuple('Node', 'val left right')
>>> Node.__new__.__defaults__ = (None,) * len(Node._fields)
>>> Node()
Node(val=None, left=None, right=None)
```
