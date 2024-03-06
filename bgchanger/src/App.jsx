import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('olive');



  return (
    <div className="w-full h-screen duration-200 relative" style={{ backgroundColor: color }}>
      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <div className="flex gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className='outline-none px-4 px-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className='outline-none px-4 px-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className='outline-none px-4 px-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
