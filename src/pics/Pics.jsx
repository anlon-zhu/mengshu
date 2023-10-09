import ImageGallery from "react-image-gallery";
import { images } from "../config.tsx";
import "./pics.scss";

export default function Pics({ galOpen, setGalOpen, year }) {
  const data = [
    {
      id: 1,
      title: "<3",
      img: "https://media.giphy.com/media/EGNi09y1CXeyA/giphy.gif",
      handleClick(setGalOpen, galOpen) {
        setGalOpen(1);
      },
    },
    {
      id: 2,
      title: "nom",
      img: "https://media.giphy.com/media/10a8AOSeP6Rqfu/giphy.gif",
      handleClick(setGalOpen, galOpen) {
        setGalOpen(2);
      },
    },
    {
      id: 3,
      title: "she's beautiful",
      img: "https://media.giphy.com/media/cxdu4okJoPZfy/giphy.gif",
      handleClick(setGalOpen, galOpen) {
        setGalOpen(3);
      },
    },
  ];

  return (
    <div className="pics">
      <div className="title">Reminiscing...</div>
      <div className="container">
        {data.map((d) => (
          <div
            className="item"
            onClick={() => d.handleClick(setGalOpen, galOpen)}
          >
            <img src={d.img} alt={d.id}></img>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>

      <div className={"gallery " + (galOpen !== 0 && "active")}>
        <span
          class="close"
          onClick={() => {
            setGalOpen(0);
          }}
        >
          &times;
        </span>
        <div className="carousel">
          <ImageGallery items={images[year][galOpen]} />
        </div>
      </div>
    </div>
  );
}
