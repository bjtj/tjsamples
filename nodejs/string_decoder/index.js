const { StringDecoder } = require('string_decoder');

function test(decoder) {
    let str = decoder.write(Buffer.from([99]));
    console.log(`str: ${str} ${str.length}`);

    str += decoder.write(Buffer.from([99]));
    console.log(`str: ${str} ${str.length}`);

    str += decoder.write(Buffer.from([0]));
    console.log(`str: ${str} ${str.length}`);

    str += decoder.write(Buffer.from([100]));
    console.log(`str: ${str} ${str.length}`);

    str += decoder.end(Buffer.from([101]));
    console.log(`str: ${str} ${str.length}`);

    let buf = Buffer.from(str, 'binary');
    console.log(`buf: ${buf} ${buf.length}`);

    let buf2 = Buffer.from([...new Array(257)].map((_, i) => i));
    console.log(`buf2: ${JSON.stringify(buf2)} -- length: ${buf2.length}`);

    let str2 = decoder.write(buf2);
    console.log(`str2: ${str2} -- length: ${str2.length}`);
}

test(new StringDecoder('ascii'));   // 257
test(new StringDecoder('base64'));  // 340
test(new StringDecoder('binary'));  // 257
test(new StringDecoder('hex'));     // 514
test(new StringDecoder('utf8'));    // 257
test(new StringDecoder('utf16le')); // 128
test(new StringDecoder('latin1'));  // 257
test(new StringDecoder('ucs2'));    // 128
