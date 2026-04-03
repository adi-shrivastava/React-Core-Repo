import React from 'react'
import Card from './components/card'
import {Bookmark} from 'lucide-react'
const App = () => {
  return (
    <div className='parent'>
      <div className="card">
        <div className='top'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQUrq7g6hxhtaFMgqmanZqIobMaBBOcb-GlJdFSWTAKw&s"/>
          <button>Save<Bookmark size={15}/></button>
        </div>
        <div className="center">
          <h3>Amazon</h3>
          <h2>Senior UI/UX Designer</h2>
          <button><span>Part-time</span></button>
          <button><span>Senior Level</span></button>
        </div>
        <div className="bottom">
          <h3>120$/hr</h3>
          <span>Mumbai India</span>
        </div>
      </div>


    </div>
  )
}

export default App