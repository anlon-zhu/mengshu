import React, {useState} from 'react';
import Confetti from 'react-confetti'
import mengshu from './mengshu.JPG';
import './App.css';

function App() {
  
    const [surprise, setSurprise] = useState(true);
    const { innerWidth: width, innerHeight: height } = window;
    
    return (
    <div className="layout">
      {(surprise) ?
      <div className="main">
         <button className="main-button" onClick={() =>  {setSurprise(false)}}>Click Here!</button>
      </div>
      :
    <div className="card" id="card">
      <Confetti
        width={width}
        height={height}/>
        <div className='title'>Happy Birthday Mengshu!</div>
        <img src={mengshu} class="pictureMengshu" alt="Mengshu"/>
        <div className='messages-container'>
          <div className='messages'>
            <h1 className='messages-title'>Austin</h1>
            <p>
              Hi Mengshu -- pro driver! Thanks for moving me around places fast and going to cool restaurants and places together. You've been one of my closest friends since APAAS happened, and I'm so glad I got to meet you. Let's keep eating omakases, checking out new tourist places, and socializing on my Tesla! Hopefully I'll become a good driver like you! Also, you can come to my house at any time to jam out on the piano and violin with me and Adam when he comes too like today. Better be getting that drip soon so you can pull!
            </p>
          </div>
         
          <div className='messages'>
          <h1 className='messages-title'>Anlon</h1>
          <p>
            Hi Mengshu! Happy birthday bro :D How's it feel being old and 19 yrs old. Thanks for being such an awesome friend ever since 4TH GRADE, which is crazy to think about. We've known each other for over half of our lives, and I'm glad we've still kept in touch since then. Looking forward to hanigng out more when you're back from Seattle :D lots of yummy food and boba. And visit princeton some time!! I'll try to visit Berk asap and we can go hit up that bar you were at LOL. Happy 19th again :3
          </p>
          </div>
        </div>
      </div>
    }
    </div>
    );
}

export default App;
