import React from 'react';
import '../css/Main.css'

import BeyonceLogo from './Main/BeyonceLogo'
import Photo from './Main/Photo'

const Main = () => {
  return (
    <div className="main">
      <div className="animate-area">
        <Photo/>
        <BeyonceLogo/>
      </div>
    </div>
  )
}

export default Main
