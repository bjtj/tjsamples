# The MongoDB Atlas Sample Datasets #

<https://developer.mongodb.com/article/atlas-sample-datasets#std-label-atlas-sample-data-local-installation>

get:

```shell
curl https://atlas-education.s3.amazonaws.com/sampledata.archive -o sampledata.archive
```

restore:

```shell
mongorestore --archive=sampledata.archive
```
