import Landing from './pages/Landing.jsx';
import React, { useState } from 'react';

function App() {
  const [playerCount, setPlayerCount] = useState(20);

  const handleStart = () => {
    alert('Start button clicked!');
  };

  return <Landing playerCount={playerCount} onStart={handleStart} />;
}

export default App;
