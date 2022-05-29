# Ruby on Rails #

<https://rubyonrails.org/>

## ruby install ##

```shell
sudo ruby-install --system ruby 2.7.2
```

## Setup rails 5.2

* https://gorails.com/setup/ubuntu/16.04

```shell
apt install -y nodejs
gem install bundler
gem install rails -v 5.2.0
```

## Blog tutorial

<http://guides.rubyonrails.org/getting_started.html>

```shell
rails new blog
```

## `Could not find gem 'sqlite3' in any of the gem sources listed in your Gemfile.`

```shell
apt install libsqlite3-dev
```

## Rails command line

<http://guides.rubyonrails.org/command_line.html>

* rails new
* rails server
* rails generate
* rails console
* rails dbconsole
* rails runner
* rails destroy

## Using RIDK ##

```cmd
> \Ruby27-x64\bin\ridk.cmd exec rails server
```

## ridk ##

<https://msp-greg.github.io/ri2/file.The-ridk-tool.html>

`ridk` is a helper tool to manage the runtime environment of RubyInstaller-2.4 and up. It can be used in cmd and powershell.
