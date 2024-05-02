import { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function App() {

  const [value, setValue] = useState('');

  return (
    <div>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <pre>{value}</pre>
    </div>
  )
}

export default App
