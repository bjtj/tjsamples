# Apache log4j #

* https://logging.apache.org/log4j/2.x/


How did I created project `hello-log4j`?

```
mvn archetype:generate -DgroupId=com.tjapp.log4j.example -DartifactId=hello-log4j -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```


# Architecture #

* https://logging.apache.org/log4j/2.x/manual/architecture.html


# Configuration #

* https://logging.apache.org/log4j/2.x/manual/configuration.html

1. Log4j will inspect the `"log4j.configurationFile"` system property and, if set, will attempt to load the configuration using the `ConfigurationFactory` that matches the file extension.
1. If no system property is set the properties ConfigurationFactory will look for `log4j2-test.properties` in the classpath.
1. If no such file is found the YAML ConfigurationFactory will look for `log4j2-test.yaml` or `log4j2-test.yml` in the classpath.
1. If no such file is found the JSON ConfigurationFactory will look for `log4j2-test.json` or `log4j2-test.jsn` in the classpath.
1. If no such file is found the XML ConfigurationFactory will look for `log4j2-test.xml` in the classpath.
1. If a test file cannot be located the properties ConfigurationFactory will look for `log4j2.properties` on the classpath.
1. If a properties file cannot be located the YAML ConfigurationFactory will look for `log4j2.yaml` or `log4j2.yml` on the classpath.
1. If a YAML file cannot be located the JSON ConfigurationFactory will look for `log4j2.json` or `log4j2.jsn` on the classpath.
1. If a JSON file cannot be located the XML ConfigurationFactory will try to locate `log4j2.xml` on the classpath.
1. If no configuration file could be located the `DefaultConfiguration` will be used. This will cause logging output to go to the console.
