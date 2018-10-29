from datetime import datetime
import time

t = datetime.now()
print('datetime.now(): %s' % t)
print('filename format: %s' % t.strftime("%Y%m%d_%H%M%S.%f"))
print('filename format: %s' % time.strftime("%Y%m%d_%H%M%S"))
print('filename format: %s' % t.strftime("%Y%m%d_%H%M%S.%f")[:-3])

