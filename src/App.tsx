import React from 'react';
import { Button } from './components/Button/Button';
export default function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>PixelKit Design System</h1>
      <Button label="Click Me" onClick={() => alert('Clicked!')} />
    </div>
  );
}