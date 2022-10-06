
import './bday.scss'
import ReactAudioPlayer from 'react-audio-player';
import song from './jvke.ogg'

export default function Bday() {

  return(
  <div className="container">
   <div className="title">
    Happy Birthday Megan!
  </div>
  <img className='kuromi' src='https://media.giphy.com/media/WVEw43BibLgfjj5caR/giphy.gif' alt='kuromi'></img>
  <ReactAudioPlayer
  src={song}
  autoPlay = {true}
  volume = {0.03}
  />
  </div>
  );
}
