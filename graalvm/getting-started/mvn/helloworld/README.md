# Maven #

<https://www.graalvm.org/latest/reference-manual/native-image/#maven>

``` shell
mvn archetype:generate -DgroupId=com.example -DartifactId=helloworld -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

## Tested Environment ##

`GRAALVM_HOME`

``` batchfile
set GRAALVM_HOME=c:\Program Files\Java\graalvm-jdk-22.0.1+8.1
```

native-maven-plugin (native.maven.plugin.version: 0.10.2)

``` xml
<plugin>
  <groupId>org.graalvm.buildtools</groupId>
  <artifactId>native-maven-plugin</artifactId>
  <version>${native.maven.plugin.version}</version>
  <extensions>true</extensions>
  <executions>
    <execution>
      <id>build-native</id>
      <goals>
        <goal>compile-no-fork</goal>
      </goals>
      <phase>package</phase>
    </execution>
    <execution>
      <id>test-native</id>
      <goals>
        <goal>test</goal>
      </goals>
      <phase>test</phase>
    </execution>
  </executions>
</plugin>
```


Java version

``` shell
java version "11.0.20" 2023-07-18 LTS
Java(TM) SE Runtime Environment 18.9 (build 11.0.20+9-LTS-256)
Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.20+9-LTS-256, mixed mode)
```

