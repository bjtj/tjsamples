# rocket - hello world

* https://rocket.rs/guide/getting-started/#hello-world


```
$ cargo run
$ curl localhost:8000
```


## `error: ``std::sync::atomic::AtomicBool::new`` is not yet stable as a const fn`

* https://github.com/SergioBenitez/Rocket/issues/437

```
$ rustup update
$ cargo update
```


## `Error: Pear requires a nightly or dev version of Rust.`

* https://stackoverflow.com/a/47688270


```
$ rustup default nightly
```
