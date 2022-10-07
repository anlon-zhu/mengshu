import React, {useState} from 'react';
import Confetti from 'react-confetti'
import './App.scss';
import Bday from './bday/Bday';
import Pics from './pics/Pics';
import Note from './note/Note';

function App() {
    const [galOpen, setGalOpen] = useState(0);
    const [surprise, setSurprise] = useState(true);
    const [pswd, setPswd] = useState('');
    const { innerWidth: width, innerHeight: height } = window;
    const checkPswd = event => {
    event.preventDefault();

  var confirmPassword = "iloveu";
  var password = document.getElementById("pswd").value;
  if (password === confirmPassword) {
       setSurprise(false);
  }
  else{
      alert("Passwords do not match.");
  }
  }


    return (
    <div className="app">
    {(surprise) ?
      <div className="main">
        <form onSubmit={checkPswd}>
          <input className="password" type="text" value={pswd} id="pswd" placeholder="Password" onChange={event => setPswd(event.target.value)}></input>
          <button className="main-button" type='submit'> Go!</button>
          </form>
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
