# webcenter/activemq docker #

https://hub.docker.com/r/webcenter/activemq/



# How to Send a Message to an Apache ActiveMQ Queue with Python #

https://simplesassim.wordpress.com/2014/03/14/how-to-send-a-message-to-an-apache-activemq-queue-with-python/

```
import stomp

conn = stomp.Connection10()
conn.start()
conn.connect()
conn.send('SampleQueue', 'Simples Assim')
conn.disconnect()
```


# Message from an Apache ActiveMQ Queue with Python #

https://simplesassim.wordpress.com/2014/03/14/how-to-receive-a-message-from-an-apache-activemq-queue-with-python/

```
import stomp
import time
 
class SampleListener(object):
  def on_message(self, headers, msg):
    print(msg)
 
conn = stomp.Connection10()
conn.set_listener('SampleListener', SampleListener())
conn.start()
conn.connect()
conn.subscribe('SampleQueue')
time.sleep(1) # secs
conn.disconnect()
```
