import { useEffect, useState, useRef, } from 'react';
import { FFmpeg, FileData } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';

const mimetypes = {
  "gif": "image/gif",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "png": "image/png",
  "tif": "image/tiff",
  "tiff": "image/tiff",
  "wbmp": "image/vnd.wap.wbmp",
  "ico": "image/x-icon",
  "jng": "image/x-jng",
  "bmp": "image/x-ms-bmp",
  "svg": "image/svg+xml",
  "webp": "image/webp",
  "3gpp": "video/3gpp",
  "3gp": "video/3gpp",
  "mpeg": "video/mpeg",
  "mpg": "video/mpeg",
  "mov": "video/quicktime",
  "flv": "video/x-flv",
  "mng": "video/x-mng",
  "asx": "video/x-ms-asf",
  "asf": "video/x-ms-asf",
  "wmv": "video/x-ms-wmv",
  "avi": "video/x-msvideo",
  "m4v": "video/mp4",
  "mp4": "video/mp4"
};

function ext2mimetype(ext) {
  return mimetypes[ext];
}

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
  const [videoUrl, setVideoUrl] = useState();
  const [imageFilenames, setImageFilenames] = useState([]);
  const [command, setCommand] = useState();
  const [fileList, setFileList] = useState();
  const [result, setResult] = useState();

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
    padding: '0 1em',
    border: 'solid 1px gray',
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

  const execute = async () => {
    let args = command.split(' ');
    console.log(args);
    const ffmpeg = ffmpegRef.current;
    let ret = await ffmpeg.exec(args);
    setResult(ret);
  };

  const listDir = async () => {
    const ffmpeg = ffmpegRef.current;
    let lst = await ffmpeg.listDir('/');
    setFileList(lst.filter(n => n.name !== '..' && n.name !== '.'));
  };

  const read = async (node) => {
    const ffmpeg = ffmpegRef.current;
    const data = await ffmpeg.readFile(node.name);

    let ext = node.name.split('.').pop();
    let mimetype = ext2mimetype(ext);

    if (mimetype && mimetype.startsWith('image')) {
      setImageUrl(URL.createObjectURL(new Blob([data], { type: mimetype })));
    } else if (mimetype && mimetype.startsWith('video')) {
      setVideoUrl(URL.createObjectURL(new Blob([data], { type: mimetype })));
    } else {
      let ext = node.name.split('.').pop();
      let mimetype = 'application/octet-stream';
      let url = URL.createObjectURL(new Blob([data], { type: mimetype }));
      let link = document.createElement('a');
      link.href = url;
      link.download = node.name;
      link.click();
    }
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
            <div style={{ display: 'flex', gap: '.25em', width: '100%' }}>
              <input
                type="text"
                value={command}
                onChange={e => setCommand(e.target.value)}
                placeholder="Command..."
                style={{ flexGrow: '1' }}
              />
              <button onClick={execute}>Execute</button>
            </div>
            <div style={{ position: 'fixed', right: 0, bottom: 0, width: '480px', maxWidth: '50%' }}>
              {imageUrl && (<img src={imageUrl} height={200} />)}
              {videoUrl && (<video src={videoUrl} controls style={{ width: '100%' }} />)}
            </div>
            <div>Result: {result}</div>
            <h3>Log</h3>
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
            <div style={{ margin: '0 0 .5em 0', border: 'solid 1px gray', width: '100%', padding: '.25em' }}>
              <button onClick={listDir}>Refresh</button>
            </div>
            <ul style={fileListStyle}>
              {
                fileList && fileList.map((node, i) => (
                  <li key={`file-${i}`} style={fileListItemStyle}>
                    {
                      node.isDir ? (
                        <div>{node.name}/</div>
                      ) : (
                        <button onClick={() => read(node)}>{node.name}</button>
                      )
                    }
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
