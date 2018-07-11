# README

bin/rails server -b 0.0.0.0 -p 3000

bin/rails generate controller Welcome index

bin/rails routes

bin/rails generate controller Articles

bin/rails generate model Article title:string text:text

bin/rails db:migrate

bin/rails generate model Comment commenter:string body:text article:references

bin/rails db:migrate
