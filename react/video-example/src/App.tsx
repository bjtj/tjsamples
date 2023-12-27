import React, { useRef, useState } from 'react';


function App() {

  const videoRef = useRef<HTMLVideoElement>(null);

  const [state, setState] = useState('');
  const [playtime, setPlaytime] = useState(0);
  const [duration, setDuration] = useState(0);

  return (
    <div className="App">

      <div style={{ padding: 3, }}>
        <h3>Video Sources</h3>
        <ul>
          <li><button onClick={() => {
            if (videoRef.current) {
              videoRef.current.src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
            }
          }}>Big Buck Bunny</button></li>
          <li><button onClick={() => {
            if (videoRef.current) {
              videoRef.current.src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
            }
          }}>Elephant Dream</button></li>
          <li><button onClick={() => {
            if (videoRef.current) {
              videoRef.current.src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4';
            }
          }}>Sintel</button></li>
        </ul>
      </div>

      <video ref={videoRef}
        width={640}
        src="https://www.w3schools.com/html/mov_bbb.mp4" controls autoPlay muted
        onLoadedMetadata={(e) => {
          setDuration(e.currentTarget.duration);
        }}
        onPlay={() => {
          setState('playing');
        }}
        onPause={() => {
          setState('paused');
        }}
        onTimeUpdate={(e) => {
          setPlaytime(e.currentTarget.currentTime);
        }}
      />
      <h3>Video State</h3>
      <div>
        <div>state: {state}</div>
        <div>playtime: {playtime}</div>
        <div>duration: {duration}</div>
      </div>

      <h3>Video Controls</h3>
      <div style={{ display: 'flex', gap: 3 }}>
        <button onClick={() => {
          videoRef.current?.play();
        }}>play</button>
        <button onClick={() => {
          videoRef.current?.pause();
        }}>pause</button>
        <button onClick={() => {
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }}>stop</button>
      </div>
    </div>
  );
}

export default App;
