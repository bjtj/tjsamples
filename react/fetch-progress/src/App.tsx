import React, { useState, useReducer } from "react";

function App() {
  const [url, setUrl] = useState(
    "https://webrtc.github.io/samples/src/video/chrome.mp4",
  );
  const [fetchingState, dispatch] = useReducer(
    fetchingReducer,
    initialFetchingState,
  );

  const doFetch = () => {
    dispatch({ type: "start" });
    fetch(url, {
      method: "GET",
      headers: {
        "Accept-Encoding": "none",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.statusText}`);
        }
        const contentLength = response.headers.get("Content-Length");
        if (!contentLength) {
          return response.arrayBuffer();
        }
        return readResponse(response, Number(contentLength), (progress) => {
          dispatch({
            type: "progress",
            progress,
          });
        });
      })
      .then((data) => {
        dispatch({
          type: "success",
          data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "failed",
          error: error.message,
        });
      });
  };

  return (
    <div style={{ padding: 10 }}>
      <div style={{ display: "flex", gap: 5 }}>
        <input
          type="text"
          style={{ flexGrow: 1 }}
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && doFetch()}
        />
        <button onClick={doFetch} disabled={fetchingState.state === "fetching"}>
          Get
        </button>
      </div>
      {fetchingState.state === "fetching" && (
        <div>Fetching... {fetchingState.progress * 100}%</div>
      )}
      {fetchingState.state === "success" && fetchingState.data && (
        <div>
          Success (Size: {fetchingState.data.byteLength.toLocaleString()} bytes)
          <pre
            style={{
              padding: 10,
              overflow: "auto",
              border: "solid 1px silver",
            }}
          >
            {arrayBufferToString(fetchingState.data)}
          </pre>
        </div>
      )}
      {fetchingState.state === "failed" && (
        <div style={{ color: "red" }}>Failed... {fetchingState.error}</div>
      )}
    </div>
  );
}

type FetchingState = {
  state: "idle" | "fetching" | "success" | "failed";
  error?: string;
  progress: number;
  data: ArrayBuffer | null;
};

type FetchingAction =
  | {
      type: "start";
    }
  | {
      type: "progress";
      progress: number;
    }
  | {
      type: "success";
      data: ArrayBuffer;
    }
  | {
      type: "failed";
      error: string;
    };

const initialFetchingState: FetchingState = {
  state: "idle",
  progress: 0,
  data: null,
};

const fetchingReducer = (
  state: FetchingState,
  action: FetchingAction,
): FetchingState => {
  switch (action.type) {
    case "start":
      return {
        ...state,
        state: "fetching",
        progress: 0,
      };
    case "progress":
      return {
        ...state,
        progress: action.progress,
      };
    case "success":
      return {
        ...state,
        state: "success",
        data: action.data,
      };
    case "failed":
      return {
        ...state,
        state: "failed",
        error: action.error,
      };
    default:
      throw new Error("Invalid Action");
  }
};

async function readResponse(
  response: Response,
  size: number,
  onProgress: (progress: number) => void,
) {
  const reader = response.body?.getReader();
  if (!reader) {
    return Promise.reject("No Reader");
  }

  const chunks: Uint8Array[] = [];
  let currentSize = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    if (value) {
      chunks.push(value);
      currentSize += value.length;
      onProgress(currentSize / size);
    }
  }

  return mergeArrayBuffers(chunks);
}

function mergeArrayBuffers(buffers: ArrayBuffer[]) {
  const totalLength = buffers.reduce((prev, curr) => prev + curr.byteLength, 0);
  const merged = new Uint8Array(totalLength);
  let offset = 0;
  for (const buffer of buffers) {
    merged.set(new Uint8Array(buffer), offset);
    offset += buffer.byteLength;
  }
  return merged.buffer;
}

function arrayBufferToString(buffer: ArrayBuffer) {
  let str = "";
  const array = new Uint8Array(buffer);
  for (let i = 0; i < array.length; i++) {
    str += String.fromCharCode(array[i]);
  }
  return str;
}

export default App;
