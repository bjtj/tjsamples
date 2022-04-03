# Use bind mounts #

<https://docs.docker.com/storage/bind-mounts/>

![https://docs.docker.com/storage/images/types-of-mounts-bind.png](https://docs.docker.com/storage/images/types-of-mounts-bind.png)


### Differences between `-v` and `--mount` behavior[🔗](https://docs.docker.com/storage/bind-mounts/#differences-between--v-and---mount-behavior)

Because the `-v` and `--volume` flags have been a part of Docker for a long time, their behavior cannot be changed. This means that **there is one behavior that is different between `-v` and `--mount`.**

If you use `-v` or `--volume` to bind-mount a file or directory that does not yet exist on the Docker host, `-v` creates the endpoint for you. **It is always created as a directory.**

If you use `--mount` to bind-mount a file or directory that does not yet exist on the Docker host, Docker does **not** automatically create it for you, but generates an error.


```shell
docker run -d \
  -it \
  --name devtest \
  --mount type=bind,source="$(pwd)"/target,target=/app \
  --mount type=bind,source="$(pwd)"/target,target=/app2,readonly,bind-propagation=rslave \
  nginx:latest
```


```shell
docker run -d \
  -it \
  --name devtest \
  -v "$(pwd)"/target:/app \
  -v "$(pwd)"/target:/app2:ro,rslave \
  nginx:latest
```
