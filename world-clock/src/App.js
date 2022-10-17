import './App.css';
import React from 'react'
import Clock from './components/Clock.jsx'

function App() {

  React.useEffect(() => {
    console.log('page loaded')
  }, []);

  const initialTimeData = {
    longHand: "",
    shortHand: "",
    cityTitle: "",
    addressLine1: "",
    addressLine2: "",
  }

  const [londonTimeData, setLondonTimeData] = React.useState(initialTimeData)
  return (
    <div className="App">
      <Clock timeData={londonTimeData} />
    </div>
  );
}

export default App;
