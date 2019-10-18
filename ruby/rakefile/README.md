# What is Rake in Ruby & How to Use it #

https://www.rubyguides.com/2019/02/ruby-rake/

* Making a backup of your database
* Running your tests
* Gathering & reporting stats


## Who Uses Rake? ##

Rails

e.g.)

```shell
$ rake db:migrate
```

## Run ##

```shell
$ rake apple
Eat more apples!
```


## Rake Options & Commands ##


* `rake -T` (list available tasks)
* `rake -P` (list tasks & their dependencies)
* `rake -W` (list tasks & where they are defined)
* `rake -V` (verbose mode, echo system commands)
* `rake -t` (debugging mode)
* `rake -f` (use a specific Rakefile)


```
> rake -T test
rake test         # Runs all tests in test folder except system ones
rake test:db      # Run tests quickly, but also reset db
rake test:system  # Run system tests only
```
