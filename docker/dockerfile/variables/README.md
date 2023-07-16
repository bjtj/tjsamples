# Dockerfile reference #

<https://docs.docker.com/engine/reference/builder/>

## Environment replacement ##

The `${variable_name}` syntax also supports a few of the standard `bash` modifiers as specified below:

-   `${variable:-word}` indicates that if `variable` is set then the result will be that value. If `variable` is not set then `word` will be the result.
-   `${variable:+word}` indicates that if `variable` is set then `word` will be the result, otherwise the result is the empty string.

e.g.)

```dockerfile
ENV abc=hello
ENV abc=bye def=$abc
ENV ghi=$abc
```

# Docker container with entrypoint variable expansion and CMD parameters #

<https://stackoverflow.com/a/42332740/5676460>

e.g.)

```bash
ENTRYPOINT ["/bin/sh", "-c", "exec /usr/bin/mycmd --token=$MY_TOKEN $0 $@"]
CMD ["pull", "stuff"]
```
