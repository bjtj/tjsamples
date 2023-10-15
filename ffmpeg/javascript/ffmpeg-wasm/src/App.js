import { useEffect, useState, useRef, } from 'react';
import { FFmpeg, FileData } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';


function App() {
  const [loaded, setLoaded] = useState(false);
  const ffmpegRef = useRef(new FFmpeg());
  const videoRef = useRef(null);
  // const messageRef = useRef(null);
  const [logs, setLogs] = useState([]);
  const [file, setFile] = useState();
  const [videoData, setVideoData] = useState();
  const [imageData, setImageData] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [imageFilenames, setImageFilenames] = useState([]);

  const load = async () => {
    const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/umd';
    const ffmpeg = ffmpegRef.current;
    ffmpeg.on('log', ({ message }) => {
      setLogs(prev => ([...prev, message]));
      console.log(message);
    });
    // toBlobURL is used to bypass CORS issue, urls with the same
    // domain can be used directly.
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
    });
    setLoaded(true);
  };

  const transcode = async (file) => {
    console.log(`transcode ${file.name}`);
    const ffmpeg = ffmpegRef.current;
    await ffmpeg.writeFile(file.name, await fetchFile(file));
    await ffmpeg.exec(['-i', file.name, 'frame-%03d.bmp']);
    // const jpegdata = await ffmpeg.readFile('filename001.bmp');
    // console.log(jpegdata);
    // setImageData(jpegdata);

    let imageFilenames = (await ffmpeg.listDir('/')).filter(info => info.isDir == false && info.name.endsWith('.bmp')).map(info => info.name);

    setImageFilenames(imageFilenames);
  };

  const listDir = async () => {
    const ffmpeg = ffmpegRef.current;
    console.log(await ffmpeg.listDir('/'));
  };

  const read = async (name) => {
    const ffmpeg = ffmpegRef.current;
    const data = await ffmpeg.readFile(name);
    setImageUrl(URL.createObjectURL(new Blob([data], { type: 'image/bmp' })));
  };

  useEffect(() => {

  }, [videoData]);

  return (loaded
    ? (
      <>
        <div>
          <input
            type="file"
            onChange={e => e.target.files && setFile(e.target.files[0])}
            accept="video/mp4,video/x-m4v,video/*" />
        </div>
        {videoData && (
          <div><video ref={videoRef} controls src={videoData}></video></div>
        )}
        <button onClick={() => file && transcode(file)}>transcode</button>
        <button onClick={() => read('frame-001.bmp')}>read</button>
        <button onClick={() => listDir()}>list</button>

        <div>
          {imageUrl && (<img src={imageUrl} width={200} height={200} />)}
        </div>

        <ul>
          {
            imageFilenames.map((name, i) => (<li key={`file-${i}`}><button onClick={() => read(name)}>{name}</button></li>))
          }
        </ul>

        <p>Open Developer Tools (Ctrl+Shift+I) to View Logs</p>
        <ul>
          {
            logs.map(log => (<li><code>{log}</code></li>))
          }
        </ul>
      </>
    )
    : (
      <button onClick={load}>Load ffmpeg-core (~31 MB)</button>
    )
  );
}

export default App;
