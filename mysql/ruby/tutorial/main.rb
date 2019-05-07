#!/usr/bin/ruby

require 'mysql2'
require 'yaml'

config = YAML::load_file("config.yml")
config["host"] ||= "localhost"
config["username"] ||= "root"
config["password"] ||= "secret"
config["database"] ||= "mydb"

client = Mysql2::Client.new(config)
client.query("select count(*) from articles")
