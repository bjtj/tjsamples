const CryptoJS = require('crypto-js');

const md5 = require('crypto-js/md5');
const Base64 = require('crypto-js/enc-base64');

async function main() {
    fetch('https://www.rfc-editor.org/rfc/rfc1.txt')
    .then(response => {
        return response.arrayBuffer();
    }).then(buffer => {
        let hash = md5(buffer);
        console.log(`MD5: ${hash}`);

        let base64 = Base64.stringify(hash);
        console.log(`Base64: ${base64}`);

        let decryptedBase64 = Base64.parse(base64);
        console.log(`Decrypted Base64: ${decryptedBase64}`);
    });
}

main();
