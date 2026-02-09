import { useEffect, useState } from 'react'
import './App.css'

function App() {

  // const URL = '/api/hi'
  const URL = 'http://localhost:8080/hi'

  const [backendResponse, setBackendResponse] = useState('')

  useEffect(() => {
    fetch(URL)
      .then((response) => response.text())
      .then((data) => {
        setBackendResponse(data)
      })
      .catch((error) => {
         setBackendResponse('Error fetching data: ' + error)
      })
  }, [])

  return (
    <>
      <h2>Backend request sent to</h2>
      <h3>{URL}</h3>
      <h2>Backend response received?</h2>
      <h3><pre>{backendResponse}</pre></h3>
    </>
  )
}

export default App
