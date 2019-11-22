from datetime import datetime
import time
from dateutil.parser import parse

print('== strftime ==')
t = datetime.now()
print(t)
print(type(t))
print(t.year)
print(t.month)
print(t.day)
print(t.hour)
print(t.minute)
print(t.second)
print('datetime.now(): %s' % t)
print('filename format: %s' % t.strftime("%Y%m%d_%H%M%S.%f"))
print('filename format: %s' % time.strftime("%Y%m%d_%H%M%S"))
print('filename format: %s' % t.strftime("%Y%m%d_%H%M%S.%f")[:-3])

print('== datetime.datetime.strptime() ==')
print(datetime.strptime('2014-01-01 23:59:27', '%Y-%m-%d %H:%M:%S'))
print(datetime.strptime('2018.11.01', '%Y.%m.%d'))
print(type(datetime.strptime('2018.11.01', '%Y.%m.%d')))

print('== dateutil.parser.parse() ==')
print(parse('2014-01-01 23:59:27'))
print(parse('2018.11.01'))
print(type(parse('2018.11.01')))
try:
    print(parse('text'))
except Exception as e:
    print('expected: {}'.format(e))

print('Done.')
