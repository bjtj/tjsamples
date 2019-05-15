# Apache Maven #

* https://maven.apache.org/


## Use ##

e.g.)

```
mvn archetype:generate
```

e.g.)

```
mvn archetype:generate \
	-DgroupId=com.tj.app \
	-DartifactId=myapp \
	-DarchetypeArtifactId=maven-archetype-quickstart \
	-DinteractiveMode=false
```

e.g.)

```
mvn checkstyle:check
```

e.g.)

```
mvn verify
```


## Introduction to Archetypes ##

* https://maven.apache.org/guides/introduction/introduction-to-archetypes.html


| Archetype ArtifactIds | Description |
| - | - |
| maven-archetype-archetype | An archetype to generate a sample archetype project.
| maven-archetype-j2ee-simple | An archetype to generate a simplifed sample J2EE application.
| maven-archetype-mojo | An archetype to generate a sample a sample Maven plugin.
| maven-archetype-plugin | An archetype to generate a sample Maven plugin.
| maven-archetype-plugin-site | An archetype to generate a sample Maven plugin site.
| maven-archetype-portlet | An archetype to generate a sample JSR-268 Portlet.
| maven-archetype-quickstart | An archetype to generate a sample Maven project.
| maven-archetype-simple | An archetype to generate a simple Maven project.
| maven-archetype-site | An archetype to generate a sample Maven site which demonstrates some of the supported document types like APT, XDoc, and FML and demonstrates how to i18n your site.
| maven-archetype-site-simple | An archetype to generate a sample Maven site.
| maven-archetype-webapp | An archetype to generate a sample Maven Webapp project.


