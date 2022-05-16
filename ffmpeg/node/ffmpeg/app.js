require('dotenv').config();
const ffmpeg = require('ffmpeg');

try {
  new ffmpeg(process.env.VIDEOPATH, function(err, video) {
    if (err) {
      console.error('error', err);
      return;
    }
    console.log('The video is ready to be processed');
    console.log(video.metadata);
    video.save('output/image%05d.png', function(err, file) {
      if (err) {
        console.error('error', err);
        return;
      }
      console.log('done - ' + file);
    });
  });
} catch (e) {
  console.log(e.code);
  console.log(e.msg);
}
