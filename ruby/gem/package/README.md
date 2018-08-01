# Make your own gem

* https://guides.rubygems.org/make-your-own-gem/


## build and install

```
gem build hello.gemspec
gem install ./hello-0.1.0.gem
```

e.g.)

```
$ irb
irb(main):001:0> require 'hello'
=> true
irb(main):002:0> Hello.hi
Hi!
=> nil
```

## push

### Requirement

* RubyGems.org account

### Get credential api key

```
$ curl -u qrush https://rubygems.org/api/v1/api_key.yaml > ~/.gem/credentials
chmod 0600 ~/.gem/credentials
```

### Push

```
gem push hello-0.1.0.gem
```

### List

```
gem list -r hello
```

### `You do not have permission to push to this gem.`

* https://github.com/rubygems/rubygems/issues/574



