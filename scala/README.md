

```cmd
> sbt new scala/scala3.g8
[info] [launcher] getting org.scala-sbt sbt 1.5.3  (this may take some time)...
[info] [launcher] getting Scala 2.12.14 (for sbt)...
[0m[[0m[0minfo[0m] [0m[0mwelcome to sbt 1.5.3 (Oracle Corporation Java 11.0.11)[0m
[0m[[0m[0minfo[0m] [0m[0mset current project to new (in build file:/C:/Users/bjtj1/AppData/Local/Temp/sbt_340c8771/new/)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/scala-sbt/sbt-giter8-resolver/sbt-giter8-resolver_2.12/0.13.1/sbt-giter8-resolver_2.12-0.13.1.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/scala-lang/scala-library/2.12.14/scala-library-2.12.14.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/scala-sbt/template-resolver/0.1/template-resolver-0.1.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/foundweekends/giter8/giter8-cli-git_2.12/0.13.1/giter8-cli-git_2.12-0.13.1.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/io/get-coursier/coursier_2.12/2.0.0-RC6-20/coursier_2.12-2.0.0-RC6-20.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/foundweekends/giter8/giter8-launcher_2.12/0.13.1/giter8-launcher_2.12-0.13.1.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.scala-sbt#template-resolver;0.1!template-resolver.jar (1047ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/com/github/scopt/scopt_2.12/3.7.1/scopt_2.12-3.7.1.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] io.get-coursier#coursier_2.12;2.0.0-RC6-20!coursier_2.12.jar (1073ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/eclipse/jgit/org.eclipse.jgit.pgm/5.8.0.202006091008-r/org.eclipse.jgit.pgm-5.8.0.202006091008-r.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.scala-sbt.sbt-giter8-resolver#sbt-giter8-resolver_2.12;0.13.1!sbt-giter8-resolver_2.12.jar (1263ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/com/jcraft/jsch.agentproxy.jsch/0.0.9/jsch.agentproxy.jsch-0.0.9.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.foundweekends.giter8#giter8-launcher_2.12;0.13.1!giter8-launcher_2.12.jar (1266ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/com/jcraft/jsch.agentproxy.sshagent/0.0.9/jsch.agentproxy.sshagent-0.0.9.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.foundweekends.giter8#giter8-cli-git_2.12;0.13.1!giter8-cli-git_2.12.jar (1425ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/com/jcraft/jsch.agentproxy.connector-factory/0.0.9/jsch.agentproxy.connector-factory-0.0.9.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] com.github.scopt#scopt_2.12;3.7.1!scopt_2.12.jar (740ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/eclipse/jgit/org.eclipse.jgit.ssh.jsch/5.8.0.202006091008-r/org.eclipse.jgit.ssh.jsch-5.8.0.202006091008-r.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.eclipse.jgit#org.eclipse.jgit.pgm;5.8.0.202006091008-r!org.eclipse.jgit.pgm.jar (790ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/commons-io/commons-io/2.6/commons-io-2.6.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] com.jcraft#jsch.agentproxy.jsch;0.0.9!jsch.agentproxy.jsch.jar (682ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/args4j/args4j/2.33/args4j-2.33.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] com.jcraft#jsch.agentproxy.sshagent;0.0.9!jsch.agentproxy.sshagent.jar(bundle) (692ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/apache/commons/commons-compress/1.19/commons-compress-1.19.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] com.jcraft#jsch.agentproxy.connector-factory;0.0.9!jsch.agentproxy.connector-factory.jar(bundle) (701ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/eclipse/jgit/org.eclipse.jgit.archive/5.8.0.202006091008-r/org.eclipse.jgit.archive-5.8.0.202006091008-r.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.eclipse.jgit#org.eclipse.jgit.ssh.jsch;5.8.0.202006091008-r!org.eclipse.jgit.ssh.jsch.jar (609ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/eclipse/jgit/org.eclipse.jgit/5.8.0.202006091008-r/org.eclipse.jgit-5.8.0.202006091008-r.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] commons-io#commons-io;2.6!commons-io.jar (897ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/eclipse/jgit/org.eclipse.jgit.ui/5.8.0.202006091008-r/org.eclipse.jgit.ui-5.8.0.202006091008-r.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.eclipse.jgit#org.eclipse.jgit.archive;5.8.0.202006091008-r!org.eclipse.jgit.archive.jar (686ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/eclipse/jgit/org.eclipse.jgit.gpg.bc/5.8.0.202006091008-r/org.eclipse.jgit.gpg.bc-5.8.0.202006091008-r.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.scala-lang#scala-library;2.12.14!scala-library.jar (2987ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/eclipse/jgit/org.eclipse.jgit.http.apache/5.8.0.202006091008-r/org.eclipse.jgit.http.apache-5.8.0.202006091008-r.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] args4j#args4j;2.33!args4j.jar(bundle) (1156ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/eclipse/jgit/org.eclipse.jgit.ssh.apache/5.8.0.202006091008-r/org.eclipse.jgit.ssh.apache-5.8.0.202006091008-r.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.eclipse.jgit#org.eclipse.jgit.ui;5.8.0.202006091008-r!org.eclipse.jgit.ui.jar (594ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/apache/httpcomponents/httpclient/4.5.10/httpclient-4.5.10.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.eclipse.jgit#org.eclipse.jgit.gpg.bc;5.8.0.202006091008-r!org.eclipse.jgit.gpg.bc.jar (690ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/slf4j/slf4j-api/1.7.2/slf4j-api-1.7.2.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.eclipse.jgit#org.eclipse.jgit.http.apache;5.8.0.202006091008-r!org.eclipse.jgit.http.apache.jar (685ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/slf4j/slf4j-log4j12/1.7.2/slf4j-log4j12-1.7.2.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.eclipse.jgit#org.eclipse.jgit;5.8.0.202006091008-r!org.eclipse.jgit.jar (1345ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/log4j/log4j/1.2.15/log4j-1.2.15.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.eclipse.jgit#org.eclipse.jgit.ssh.apache;5.8.0.202006091008-r!org.eclipse.jgit.ssh.apache.jar (896ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-servlet/9.4.28.v20200408/jetty-servlet-9.4.28.v20200408.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.slf4j#slf4j-api;1.7.2!slf4j-api.jar (682ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/eclipse/jgit/org.eclipse.jgit.lfs/5.8.0.202006091008-r/org.eclipse.jgit.lfs-5.8.0.202006091008-r.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.slf4j#slf4j-log4j12;1.7.2!slf4j-log4j12.jar (681ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/eclipse/jgit/org.eclipse.jgit.lfs.server/5.8.0.202006091008-r/org.eclipse.jgit.lfs.server-5.8.0.202006091008-r.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] log4j#log4j;1.2.15!log4j.jar (607ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/osgi/org.osgi.core/4.3.1/org.osgi.core-4.3.1.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.eclipse.jetty#jetty-servlet;9.4.28.v20200408!jetty-servlet.jar (738ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/com/googlecode/javaewah/JavaEWAH/1.1.7/JavaEWAH-1.1.7.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.apache.httpcomponents#httpclient;4.5.10!httpclient.jar (1558ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/bouncycastle/bcpg-jdk15on/1.65/bcpg-jdk15on-1.65.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.eclipse.jgit#org.eclipse.jgit.lfs.server;5.8.0.202006091008-r!org.eclipse.jgit.lfs.server.jar (572ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/bouncycastle/bcprov-jdk15on/1.65.01/bcprov-jdk15on-1.65.01.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.eclipse.jgit#org.eclipse.jgit.lfs;5.8.0.202006091008-r!org.eclipse.jgit.lfs.jar (740ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/bouncycastle/bcpkix-jdk15on/1.65/bcpkix-jdk15on-1.65.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.osgi#org.osgi.core;4.3.1!org.osgi.core.jar (619ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/apache/httpcomponents/httpcore/4.4.12/httpcore-4.4.12.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.apache.commons#commons-compress;1.19!commons-compress.jar (3085ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/commons-logging/commons-logging/1.2/commons-logging-1.2.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] com.googlecode.javaewah#JavaEWAH;1.1.7!JavaEWAH.jar(bundle) (754ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/commons-codec/commons-codec/1.11/commons-codec-1.11.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.apache.httpcomponents#httpcore;4.4.12!httpcore.jar (893ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/apache/sshd/sshd-osgi/2.4.0/sshd-osgi-2.4.0.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] commons-logging#commons-logging;1.2!commons-logging.jar (870ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/apache/sshd/sshd-sftp/2.4.0/sshd-sftp-2.4.0.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.bouncycastle#bcpg-jdk15on;1.65!bcpg-jdk15on.jar (1437ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/net/i2p/crypto/eddsa/0.3.0/eddsa-0.3.0.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] commons-codec#commons-codec;1.11!commons-codec.jar (888ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/apache/sshd/sshd-core/2.4.0/sshd-core-2.4.0.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.bouncycastle#bcprov-jdk15on;1.65.01!bcprov-jdk15on.jar (1873ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/apache/sshd/sshd-common/2.4.0/sshd-common-2.4.0.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] net.i2p.crypto#eddsa;0.3.0!eddsa.jar(bundle) (701ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/com/jcraft/jsch/0.1.55/jsch-0.1.55.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.apache.sshd#sshd-core;2.4.0!sshd-core.jar (977ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/com/jcraft/jzlib/1.1.1/jzlib-1.1.1.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.bouncycastle#bcpkix-jdk15on;1.65!bcpkix-jdk15on.jar (2723ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/javax/mail/mail/1.4/mail-1.4.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.apache.sshd#sshd-sftp;2.4.0!sshd-sftp.jar (1793ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/javax/activation/activation/1.1/activation-1.1.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] com.jcraft#jsch;0.1.55!jsch.jar (709ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-security/9.4.28.v20200408/jetty-security-9.4.28.v20200408.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] com.jcraft#jzlib;1.1.1!jzlib.jar (689ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-server/9.4.28.v20200408/jetty-server-9.4.28.v20200408.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.apache.sshd#sshd-osgi;2.4.0!sshd-osgi.jar (2272ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/javax/servlet/javax.servlet-api/3.1.0/javax.servlet-api-3.1.0.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] javax.mail#mail;1.4!mail.jar (660ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-http/9.4.28.v20200408/jetty-http-9.4.28.v20200408.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.eclipse.jetty#jetty-security;9.4.28.v20200408!jetty-security.jar (703ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-io/9.4.28.v20200408/jetty-io-9.4.28.v20200408.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] javax.activation#activation;1.1!activation.jar (949ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-util/9.4.28.v20200408/jetty-util-9.4.28.v20200408.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] javax.servlet#javax.servlet-api;3.1.0!javax.servlet-api.jar (667ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/com/google/code/gson/gson/2.8.2/gson-2.8.2.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.eclipse.jetty#jetty-server;9.4.28.v20200408!jetty-server.jar (795ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/com/jcraft/jsch.agentproxy.core/0.0.9/jsch.agentproxy.core-0.0.9.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.eclipse.jetty#jetty-http;9.4.28.v20200408!jetty-http.jar (591ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/com/jcraft/jsch.agentproxy.usocket-jna/0.0.9/jsch.agentproxy.usocket-jna-0.0.9.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.eclipse.jetty#jetty-io;9.4.28.v20200408!jetty-io.jar (696ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/com/jcraft/jsch.agentproxy.usocket-nc/0.0.9/jsch.agentproxy.usocket-nc-0.0.9.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] com.jcraft#jsch.agentproxy.usocket-jna;0.0.9!jsch.agentproxy.usocket-jna.jar(bundle) (570ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/com/jcraft/jsch.agentproxy.pageant/0.0.9/jsch.agentproxy.pageant-0.0.9.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] com.jcraft#jsch.agentproxy.core;0.0.9!jsch.agentproxy.core.jar(bundle) (677ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/net/java/dev/jna/jna/4.1.0/jna-4.1.0.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] com.google.code.gson#gson;2.8.2!gson.jar (839ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/net/java/dev/jna/jna-platform/4.1.0/jna-platform-4.1.0.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.apache.sshd#sshd-common;2.4.0!sshd-common.jar (2935ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/io/get-coursier/coursier-core_2.12/2.0.0-RC6-20/coursier-core_2.12-2.0.0-RC6-20.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] com.jcraft#jsch.agentproxy.usocket-nc;0.0.9!jsch.agentproxy.usocket-nc.jar(bundle) (683ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/io/get-coursier/coursier-cache_2.12/2.0.0-RC6-20/coursier-cache_2.12-2.0.0-RC6-20.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] com.jcraft#jsch.agentproxy.pageant;0.0.9!jsch.agentproxy.pageant.jar(bundle) (583ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/com/github/alexarchambault/argonaut-shapeless_6.2_2.12/1.2.0-M12/argonaut-shapeless_6.2_2.12-1.2.0-M12.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] net.java.dev.jna#jna;4.1.0!jna.jar (802ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/io/get-coursier/coursier-util_2.12/2.0.0-RC6-20/coursier-util_2.12-2.0.0-RC6-20.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] io.get-coursier#coursier-cache_2.12;2.0.0-RC6-20!coursier-cache_2.12.jar (731ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/scala-lang/modules/scala-xml_2.12/1.3.0/scala-xml_2.12-1.3.0.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] com.github.alexarchambault#argonaut-shapeless_6.2_2.12;1.2.0-M12!argonaut-shapeless_6.2_2.12.jar (595ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/io/github/alexarchambault/windows-ansi/windows-ansi/0.0.3/windows-ansi-0.0.3.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] io.get-coursier#coursier-util_2.12;2.0.0-RC6-20!coursier-util_2.12.jar (786ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/fusesource/jansi/jansi/1.18/jansi-1.18.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] io.github.alexarchambault.windows-ansi#windows-ansi;0.0.3!windows-ansi.jar (581ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/io/argonaut/argonaut_2.12/6.2.4/argonaut_2.12-6.2.4.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.eclipse.jetty#jetty-util;9.4.28.v20200408!jetty-util.jar (2619ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/com/chuusai/shapeless_2.12/2.3.3/shapeless_2.12-2.3.3.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.scala-lang.modules#scala-xml_2.12;1.3.0!scala-xml_2.12.jar(bundle) (740ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/scala-lang/scala-reflect/2.12.14/scala-reflect-2.12.14.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.fusesource.jansi#jansi;1.18!jansi.jar (733ms)[0m
[0m[[0m[0minfo[0m] [0m[0mdownloading https://repo1.maven.org/maven2/org/typelevel/macro-compat_2.12/1.1.1/macro-compat_2.12-1.1.1.jar ...[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] net.java.dev.jna#jna-platform;4.1.0!jna-platform.jar (2236ms)[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] io.argonaut#argonaut_2.12;6.2.4!argonaut_2.12.jar (730ms)[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] io.get-coursier#coursier-core_2.12;2.0.0-RC6-20!coursier-core_2.12.jar (2451ms)[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.scala-lang#scala-reflect;2.12.14!scala-reflect.jar (1078ms)[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] org.typelevel#macro-compat_2.12;1.1.1!macro-compat_2.12.jar (689ms)[0m
[0m[[0m[0minfo[0m] [0m[0m [SUCCESSFUL ] com.chuusai#shapeless_2.12;2.3.3!shapeless_2.12.jar(bundle) (8044ms)[0m
[info] resolving Giter8 0.13.1...

A template to demonstrate a minimal Scala 3 application

name [Scala 3 Project Template]: hello world

Template applied in C:\dev\git\tjsamples\scala\.\hello-world
```
