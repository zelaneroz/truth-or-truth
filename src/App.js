import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Setup from './pages/Setup';
import Game from './pages/Game';


function App() {
  const [playerCount, setPlayerCount] = useState(20);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Landing playerCount={playerCount} />}
        />
        <Route
          path="/setup"
          element={<Setup />}
        />

        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;



// import Landing from './pages/Landing.jsx';
// import React, { useState } from 'react';

// function App() {
//   const [playerCount, setPlayerCount] = useState(20);

//   const handleStart = () => {
//     alert('Start button clicked!');
//   };

//   return <Landing playerCount={playerCount} onStart={handleStart} />;
// }

// export default App;
