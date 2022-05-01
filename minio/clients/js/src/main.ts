var Minio = require('minio')

var minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'user',
    secretKey: 'password'
});

// File that needs to be uploaded.
var file = './hello.txt'

// Make a bucket called hello.
minioClient.makeBucket('hello', 'us-east-1', function(err) {
    if (err) return console.log(err)

    console.log('Bucket created successfully in "us-east-1".')

    var metaData = {
        'Content-Type': 'application/octet-stream',
        'X-Amz-Meta-Testing': 1234,
        'example': 5678
    }

    // Metadata
    // --------
    // Content-Type
    // - application/octet-stream
    // X-Amz-Meta-Example
    // - 5678
    // X-Amz-Meta-Testing
    // - 1234
    
    // Using fPutObject API upload your file to the bucket hello.
    minioClient.fPutObject('hello', 'hello.txt', file, metaData, function(err, etag) {
        if (err) return console.log(err)
        console.log('File uploaded successfully.')
    });
});
