// <https://dev.to/samthor/progress-indicator-with-fetch-1loo>

async function downloadFile(url, onprogress) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
          "Accept-Encoding": "none",
        },
    });
    let length = response.headers.get('Content-Length');

    if (!length) {
      // something was wrong with response, just give up
      onprogress(0, 0);
      let ret =  await response.arrayBuffer();
      console.log(`no content length: ${ret.byteLength}`);
      onprogress(1.0, ret.byteLength);
      return ret;
    }

    length = parseInt(length);
    console.log(`Length: ${length}`);
    onprogress(0, length);

    const array = new Uint8Array(length);
    let at = 0;  // to index into the array

    const reader = response.body.getReader();

   for (;;) {
      const {done, value} = await reader.read();
      if (done) {
        break;
      }
      array.set(value, at);
      at += value.length;
      onprogress(at / length, length);
    }
    return array;
  }