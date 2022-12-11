# TAURI #

<https://tauri.app/>

**Rust required**

<https://www.rust-lang.org/learn/get-started>

## Quickstart (Rust) ##

```bash
cargo install create-tauri-app
cargo create-tauri-app
```

## Run ##

```bash
cd tauri-app
cargo tauri dev
```

## Additional requirements ##

<https://tauri.app/v1/guides/getting-started/prerequisites/>

```bash
cargo install tauri-cli
```

## failed to run custom build command for ring v0.16.20 #2819 ##

<https://github.com/shadowsocks/shadowsocks-android/discussions/2819#discussioncomment-3944820>

The working solution for windows ...

```bash
rustup show
rustup default stable-x86_64-pc-windows-msvc
```
