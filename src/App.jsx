import { useState } from 'react'
import './App.css'

function App() {
  const [systemId, setSystemId] = useState(0)
  const [intrusionDetected, setIntrusionDetected] = useState()
  const handleClick = async () => {
    const result = (await fetch(`http://localhost:8000/${systemId}`).then(res => res.json()).then(data => data.attacked == 1));
    console.log(result);
    setIntrusionDetected(result)
  }
  return (
    <>
      <h1>Intrusion Detection System</h1>
      <div className="card">
        <input style={{ marginRight: '1rem' }} value={systemId} onChange={(e) => setSystemId(e.target.value)}/>
        <button onClick={handleClick}>
          Detect Intrusion
        </button>
        <h2 className={intrusionDetected ? 'red' : 'green'}>{intrusionDetected ? 'Intrusion Detected' : 'System is safe!'}
        </h2>
      </div>
    </>
  )
}

export default App
