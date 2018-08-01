# Make your own gem

* https://guides.rubygems.org/make-your-own-gem/


## Build and install

```
gem build hello-tj.gemspec
gem install ./hello-tj-0.1.0.gem
```

e.g.)

```
$ irb
irb(main):001:0> require 'hello-tj'
=> true
irb(main):002:0> HelloTj.hi
Hi! TJ
=> nil
```

## Push

### Requirement

* RubyGems.org account

### Get credential api key

```
$ curl -u $USERNAME https://rubygems.org/api/v1/api_key.yaml > ~/.gem/credentials
$ chmod 0600 ~/.gem/credentials
```

### Push

```
gem push hello-tj-0.1.0.gem
```

### List

```
gem list -r hello-tj
```

### `You do not have permission to push to this gem.`

Check if already registered with the same name



