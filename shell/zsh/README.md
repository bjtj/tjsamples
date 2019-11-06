

# How can I read documentation about built in zsh commands? #

https://stackoverflow.com/a/56874094/5676460

```
unalias run-help
autoload run-help
```


# How to make zsh `run-help` to ignore `sudo` and get help about the following command #

https://stackoverflow.com/a/32293317/5676460


```
autoload -U run-help
autoload run-help-sudo
```
