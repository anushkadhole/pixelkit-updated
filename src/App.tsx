import React, { useState } from 'react';
import { Button } from '../components/Button/Button';
import { ThemeToggle } from '../components/ThemeToggle/ThemeToggle';
import '../styles/global.css';

const App = () => {
  const [label, setLabel] = useState("Click Me");
  const [size, setSize] = useState("medium");

  return (
    <div className="app">
      <header className="header">
        <h1>PixelKit Design System</h1>
        <ThemeToggle />
      </header>

      <section style={{ marginTop: '2rem' }}>
        <h2>🎮 Interactive Playground</h2>

        <label>
          Button Text:
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            style={{ marginLeft: '1rem' }}
          />
        </label>

        <br /><br />

        <label>
          Button Size:
          <select value={size} onChange={(e) => setSize(e.target.value)} style={{ marginLeft: '1rem' }}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>

        <div style={{ marginTop: '2rem' }}>
          <Button label={label} onClick={() => alert('You clicked it!')} size={size} />
        </div>
      </section>
    </div>
  );
};

export default App;
