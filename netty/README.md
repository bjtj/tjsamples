# Downloads #

<https://netty.io/downloads.html>

### Dependencies

Please note that Netty has _no mandatory external dependencies_. JDK 1.5 (1.6 for Netty 4+) or above is all that you need to run Netty.

### Getting notified on a new release

You can either subscribe to [our official blog](https://netty.io/news/index.html) or follow [@netty\_project](https://twitter.com/netty_project) at Twitter.

### Downloading from the Maven central repository

Add the following dependency section to your pom.xml:

```xml
<dependencies>
 ...
 <dependency>
 <groupId>io.netty</groupId>
 <artifactId>netty</artifactId> <!-- Use 'netty-all' for 4.0 or above -->
 <version>X.Y.Z.Q</version>
 <scope>compile</scope>
 </dependency>
 ...
</dependencies>
```
