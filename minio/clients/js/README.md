# MinIO Docker Quickstart Guide Slack #

<https://docs.min.io/docs/minio-docker-quickstart-guide.html>

```shell
docker run -p 9000:9000 -p 9001:9001 -e "MINIO_ROOT_USER=AKIAIOSFODNN7EXAMPLE" -e "MINIO_ROOT_PASSWORD=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY" quay.io/minio/minio server /data --console-address ":9001"
```


# MinIO JavaScript Library for Amazon S3 Compatible Cloud Storage #

<https://docs.min.io/docs/javascript-client-quickstart-guide.html>

## Download from NPM ##

```shell
$ npm install --save minio
```

## Using with TypeScript ##

```shell
npm install --save-dev @types/minio
```


