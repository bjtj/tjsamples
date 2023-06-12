# Installation #

<https://deno.com/manual@v1.34.2/getting_started/installation>

Using Shell (macOS and Linux):

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Using PowerShell (Windows):

```powershell
irm https://deno.land/install.ps1 | iex
```



# Deno vs. Node: No One is Ready for the Move #

<https://cult.honeypot.io/reads/deno-vs-node-main-differences/>

## Security ##

These flags consist of:

```
—-allow-env 
```

- Allow environment access for things like getting and setting environment variables.

```
—-allow-hrtime
```

- Allow high-resolution time measurement.

```
—-allow-net
```

- Allow network access.

```
—-allow-read 
```

- Allow file system read access.

```
—-allow-run
```

- Allow running subprocesses.

```
—-allow-write
```

- Allow file system write access.
