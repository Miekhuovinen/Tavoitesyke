import './App.css';
import { useState } from 'react';

function App() {
  const [ika, setIka] = useState(0)
  const [low, setLow] = useState(0)
  const [high, setHigh] = useState(0)

  function laske(e) {
    e.preventDefault();
    const lower = (220 - ika) * 0.65;
    const upper = (220 - ika) * 0.85;
    setLow(lower);
    setHigh(upper);
  }

  return (
    <div id='content'>
      <h3>Heart rate limmits calculator</h3>
      <form onSubmit={laske}>
        <div>
          <label>Age</label>
        </div>
        <div>
          <input className='joo' value={ika} onChange={e => setIka(e.target.value)} />
        </div>
        <div>
          <label>Heart rate limits</label>
        </div>
        <div>
          <output className='joo'>{low.toFixed(0) + "-" + high.toFixed(0)} </output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
