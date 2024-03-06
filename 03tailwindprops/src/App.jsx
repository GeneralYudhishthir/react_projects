import { useState } from 'react';

import './App.css';
import Card from './components/card'; // Corrected import path

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username : 'Dharmaraj',
    age : 21
  }
  return (
    <>
      <h1 className='bg-green-400 text-black'>tailwindtest</h1>
      {/* <Card username='chaiaurcode' myArr={myObj} /> */}
      <Card username='chaiaurcode' myArr={myObj} btnText = "click Me" />
      
    </>
  );
}

export default App;
