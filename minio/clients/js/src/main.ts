import { config } from 'dotenv';
config();
import { Client } from 'minio';

const endpoint = process.env.ENDPOINT || 'localhost';
const port = parseInt(process.env.PORT || '9000');
const usessl = process.env.USESSL == 'true';
const accesskey = process.env.ACCESS_KEY || '';
const secretkey = process.env.SECRET_KEY || '';

var minioClient = new Client({
    endPoint: endpoint,
    port: port,
    useSSL: usessl,
    accessKey: accesskey,
    secretKey: secretkey,
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
