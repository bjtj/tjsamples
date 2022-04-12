package kr.tj.lombok;

import lombok.extern.apachecommons.CommonsLog;
import lombok.extern.java.Log;
import lombok.extern.slf4j.Slf4j;

// https://projectlombok.org/features/log

@Log
public class LogExample {
  public static void main(String... args) {
    log.severe("Something's wrong here");
  }
}

@Slf4j
class LogExampleOther {

//<!-- https://mvnrepository.com/artifact/org.slf4j/slf4j-api -->
//<dependency>
//<groupId>org.slf4j</groupId>
//<artifactId>slf4j-api</artifactId>
//<version>1.7.36</version>
//</dependency>
//
//
//<dependency>
//<groupId>org.slf4j</groupId>
//<artifactId>slf4j-log4j12</artifactId>
//<version>1.7.36</version>
//<type>pom</type>
//<scope>test</scope>
//</dependency>

  public static void main(String... args) {
    log.error("Something else is wrong here");
  }
}

@CommonsLog(topic="CounterLog")
class LogExampleCategory {

//<!-- https://mvnrepository.com/artifact/commons-logging/commons-logging -->
//<dependency>
//<groupId>commons-logging</groupId>
//<artifactId>commons-logging</artifactId>
//<version>1.2</version>
//</dependency>

  public static void main(String... args) {
    log.error("Calling the 'CounterLog' with a message");
  }
}
