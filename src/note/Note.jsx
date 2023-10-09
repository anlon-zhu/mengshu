import "./note.scss";
import { messages } from "../config.tsx";

export default function Note({ year }) {
  return (
    <div className="note">
      <img
        src="https://media.giphy.com/media/lTY8pVIs76YOMDaDjY/giphy.gif"
        alt="balloon"
      ></img>
      <div className="title">Dear megan rhee :</div>
      <div className="messages-container"> {messages[year]}</div>
    </div>
  );
}
