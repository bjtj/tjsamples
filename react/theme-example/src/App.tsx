import { useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import { useThemeContext, ThemeProvider } from './ThemeContext';



function App() {

  const [page, setPage] = useState<string>('page1');
  const { darkmode, toggleDarkmode, backgroundColor, primaryColor, secondaryColor } = useThemeContext();

  return (
    <div style={{
      position: 'fixed', inset: 0, backgroundColor, color: primaryColor, padding: '1rem',
      transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '250ms'
    }}>
      <h1>Theme Example</h1>
      <div style={{ display: 'flex', gap: 10 }}>
        {darkmode ? "Dark Mode" : "Light Mode"}
        <button onClick={() => toggleDarkmode()}>Toggle</button>
      </div>
      <div>
        <h2>Choose Page:</h2>
        <div style={{ display: 'flex', gap: 5 }}>
          <button onClick={() => setPage('page1')}>Page1</button>
          <button onClick={() => setPage('page2')}>Page2</button>
        </div>
      </div>
      <div>
        {page === 'page1' && <Page1 />}
        {page === 'page2' && <Page2 />}
      </div>

    </div>
  );
}

function Root() {
  return (
    <ThemeProvider><App /></ThemeProvider>
  );
}

export default Root;
