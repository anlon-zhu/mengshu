import React, {useState} from 'react';
import Confetti from 'react-confetti'
import './App.scss';
import Bday from './bday/Bday';
import Pics from './pics/Pics';
import Note from './note/Note';

function App() {
    const [galOpen, setGalOpen] = useState(0);
    const [surprise, setSurprise] = useState(true);
    const { innerWidth: width, innerHeight: height } = window;

    return (
    <div className="app">
    {(surprise) ?
      <div className="main">
         <button className="main-button" onClick={() =>  {setSurprise(false)}}>Click Here!</button>
      </div>
      :
      <div className="layout">
        <Confetti
          width={width}
          height={height}
          tweenDuration='20000'
          numberOfPieces='600'
          recycle={false}/>
        <div className="sections">
          <Bday/>
          <Pics galOpen={galOpen} setGalOpen={setGalOpen}/>
          <Note/>
        </div>
      </div>
    }
  </div>
  );
}

export default App;
