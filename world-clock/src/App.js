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
  
  const baseURL = 'http://worldtimeapi.org/api/timezone/' 

  const handleLoadData = async () => {
    let dataArray = []
    for (let i = 0; i < 3; i++) {
    await fetch(baseURL + timeZones[i])
      .then((response) => response.json())
      .then((data) => {
        dataArray.push(data)
      })
      setTimeData(dataArray)
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
