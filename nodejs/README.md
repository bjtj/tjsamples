# How To Install Node.js On Ubuntu 18.04 #

https://hostadvice.com/how-to/how-to-install-node-js-on-ubuntu-18-04/


```shell
sudo apt install nodejs
sudo apt install npm
```


# `npm : Depends: node-gyp (>= 0.10.9) but it is not going to be installed` #

https://askubuntu.com/a/1092849

```shell
sudo apt install nodejs-dev node-gyp libssl1.0-dev
sudo apt install npm
```


# getter for a property #

https://stackoverflow.com/a/31999286/5676460
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get

```
get area() {
    return this.calcArea()
}
```


# How can I get console.log to output the getter result instead of the string “[Getter/Setter]”? #

https://stackoverflow.com/a/58633124/5676460

```
util.inspect(obj, { getters: true });
```

