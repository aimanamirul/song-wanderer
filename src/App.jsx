import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Companion from './components/Companion'
import Lists from './components/Lists'

import albums from './data/albums.json'

const trackList = [
  {
    id: 0,
    name: 'A',
    duration: '3:45'
  },
  {
    id: 1,
    name: 'B',
    duration: '2:42'
  },
  {
    id: 2,
    name: 'C',
    duration: '1:57'
  }
]

function App() {
  const [count, setCount] = useState(0)
  const [tracks, setTracks] = useState([...trackList])

  return (
    <div className='main'>
      <div className="card">
        <Lists albums={albums} />
      </div>
      <div className="card">
        <Companion tracks={tracks} setTracks={setTracks}/>
      </div>
    </div>
  )
}

export default App
