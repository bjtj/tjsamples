# Installation

https://kotlinlang.org/docs/tutorials/command-line.html

```
sdk install kotlin
```


# `error: unable to instantiate class Test (test.kts): java.lang.NoClassDefFoundError: kotlin/script/templates/standard/ScriptTemplateWithArgs` #

https://discuss.kotlinlang.org/t/executing-kotlin-script-from-terminal/14019


> I don’t think you’re doing anything wrong at all — I think it’s a new bug in the Kotlin platform!
>
> I hit the same error yesterday, soon after upgrading to 1.3.50, on a script that’s run fine many times before.
>
> (There have been similar reports before on YouTrack. I couldn’t spot a new one, but I did add a comment to an old one that seems to apply anew.)
>
> Normally you can fix a NoClassDefFoundError by playing with the classpath; but even though I found two different jars in the Kotlin installation that seemed to define the missing class, I couldn’t fix the problem with any amount of playing with -cp, -kotlin-home, $CLASSPATH, or $KOTLIN_HOME.
>
> (If it matters, this is using Kotlin installed by Homebrew; so not related to any IDE.)


e.g.)

```
java -jar $KOTLIN_HOME/lib/kotlin-compiler.jar -script hello.kts
```

https://youtrack.jetbrains.com/issue/KT-33529?_ga=2.246442112.504837349.1570669058-686115611.1567647399

> Fix confirmed in 1.3.60-dev-1757.

