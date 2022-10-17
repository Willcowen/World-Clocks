import './App.css';
import React from 'react'
import Clock from './components/Clock.jsx'

function App() {
  

  const initialTimeData = {
    longHand: "",
    shortHand: "",
    cityTitle: "",
    addressLine1: "",
    addressLine2: "",
  }

  const [londonTimeData, setLondonTimeData] = React.useState(initialTimeData)
  const [timeData, setTimeData] = React.useState([])

  let timeZones = ["Europe/London", "America/New_York", "Asia/Tokyo"]
  
  React.useEffect(() => {
    handleLoadData()
  }, []);

  const handleLoadData = () => {
    for (let i = 0; i < 3; i++) {
      fetch('http://worldtimeapi.org/api/timezone/' + timeZones[i])
      .then((response) => response.json())
      .then((data) => {
        let timeDataCopy = [...timeData, data]
        setTimeData(timeDataCopy)
      })
    }

  }

  console.log('timeData:', timeData)
  return (
    <div className="App">
      <Clock timeData={londonTimeData} />
    </div>
  );
}

export default App;
