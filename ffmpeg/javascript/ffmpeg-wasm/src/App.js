import { useEffect, useState, useRef, } from 'react';
import { FFmpeg, FileData } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';


function App() {
  const [loaded, setLoaded] = useState(false);
  const ffmpegRef = useRef(new FFmpeg());
  const videoRef = useRef(null);
  const [logs, setLogs] = useState([]);
  const [file, setFile] = useState();
  const [fetchWritten, setFetchWritten] = useState(false);
  const [videoData, setVideoData] = useState();
  const [imageData, setImageData] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [imageFilenames, setImageFilenames] = useState([]);

  const screenStyle = {
    position: 'fixed',
    inset: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  };

  const leftAreaStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: 1,
    height: '100%',
    overflow: 'hidden',
  };

  const rightAreaStyle = {
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '100%',
    overflow: 'hidden',
  };

  const FileInputStyle = {
    background: '#f0f0f0',
    padding: '0.5em',
  };

  const fileListStyle = {
    overflowY: 'auto',
    flexGrow: 1,
    listStyleType: 'none',
    margin: 0,
    padding: '0 1.2em 0 0',
  };

  const fileListItemStyle = {
    whiteSpace: 'nowrap',
  };

  const logStyle = {
    overflow: 'auto',
    flexGrow: 1,
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    background: '#333333',
    color: 'white',
  };

  const logListStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: '0.5em',
    fontSize: '0.8em',
  };

  const logItemStyle = {
    whiteSpace: 'nowrap',
  };

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

  const doFetchWriteFile = async () => {
    if (!file) {
      return;
    }
    const ffmpeg = ffmpegRef.current;
    await ffmpeg.writeFile(file.name, await fetchFile(file));
    setFetchWritten(true);
  };

  const transcode = async (file) => {
    console.log(`transcode ${file.name}`);
    const ffmpeg = ffmpegRef.current;
    await ffmpeg.exec(['-i', file.name, 'frame-%06d.bmp']);;
    let files = await ffmpeg.listDir('/');
    let imageFilenames = (files).filter(info => info.isDir == false && info.name.endsWith('.bmp')).map(info => info.name);

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
    if (file) {
      setFetchWritten(false);
    }
  }, [file]);

  return (loaded
    ? (
      <>
        <div style={screenStyle}>

          {/* LEFT */}
          <div style={leftAreaStyle}>
            <div>
              <input
                style={FileInputStyle}
                type="file"
                onChange={e => e.target.files && setFile(e.target.files[0])}
                accept="video/mp4,video/x-m4v,video/*" />
              <button onClick={doFetchWriteFile} disabled={!file || fetchWritten}>Write</button>
            </div>
            {videoData && (
              <div><video ref={videoRef} controls src={videoData}></video></div>
            )}
            <div>
              <button onClick={() => transcode(file)} disabled={!file || !fetchWritten}>Transcode</button>
              <button onClick={() => listDir()}>List Files</button>
            </div>
            <div>
              {imageUrl && (<img src={imageUrl} height={200} />)}
            </div>
            <div>Open Developer Tools (Ctrl+Shift+I) to View Logs</div>
            <div style={logStyle}>
              <ul style={logListStyle}>
                {
                  logs.map(log => (
                    <li style={logItemStyle}>{log}</li>))
                }
              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <div style={rightAreaStyle}>
            <h2>File List</h2>
            <ul style={fileListStyle}>
              {
                imageFilenames.map((name, i) => (
                  <li key={`file-${i}`} style={fileListItemStyle}>
                    <button onClick={() => read(name)}>{name}</button>
                  </li>))
              }
            </ul>
          </div>
        </div>


      </>
    )
    : (
      <button onClick={load}>Load ffmpeg-core (~31 MB)</button>
    )
  );
}

export default App;
