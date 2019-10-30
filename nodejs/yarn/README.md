# Getting Started #

* https://yarnpkg.com/en/docs/getting-started


# Usage #

* https://yarnpkg.com/en/docs/usage

e.g.)

```shell
$ yarn init
$ yarn add $package
$ yarn upgrade $package
$ yarn remove $package
$ yarn install
```

e.g.)

```shell
$ yarn upgrade sequelize@^4.44.3
```


# Creating a new project #

* https://yarnpkg.com/en/docs/creating-a-project

e.g.)

```
$ mkdir hello
$ cd hello
$ yarn init
yarn init v1.15.2
question name (hello): 

question version (1.0.0): 

question description: hello project
hello project
question entry point (index.js): 

question repository url: 

question author: tj
tj
question license (MIT): 

question private: 

success Saved package.json
Done in 21.48s.

$ yarn install
yarn install v1.15.2
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 0.04s.
```


# package.json #

* https://yarnpkg.com/lang/en/docs/package-json/


# The package.json File #

* http://npm.github.io/using-pkgs-docs/package-json/the-package-json-file.html


# A guide to creating a NodeJS command-line package #

* https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e


```
#!/usr/bin/env node
```

```
$ chmod +x cli.js
```

```
$ npm link
```

```
$ npm unlink
```
