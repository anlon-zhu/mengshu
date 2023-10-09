import "./bday.scss";
import ReactAudioPlayer from "react-audio-player";
import keshi from "./keshi.ogg";
import jvke from "./jvke.ogg";

export default function Bday({ year }) {
  return (
    <div className="container">
      <div className="title">Happy {year - 2003}th Birthday Megan!</div>
      <img
        className="kuromi"
        src="https://media.giphy.com/media/WVEw43BibLgfjj5caR/giphy.gif"
        alt="kuromi"
      ></img>
      <ReactAudioPlayer
        src={year === 2022 ? jvke : keshi}
        autoPlay={true}
        volume={0.03}
      />
    </div>
  );
}
