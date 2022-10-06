import ImageGallery from 'react-image-gallery';
import './pics.scss'


export default function Pics({galOpen, setGalOpen}) {

const images1 =
[{
  original: require('.././assets/7leaves.jpg'),
  thumbnail: require('.././assets/7leaves.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/adorable.jpg'),
  thumbnail: require('.././assets/adorable.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/beach-selfie.jpg'),
  thumbnail: require('.././assets/beach-selfie.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/garden.jpg'),
  thumbnail: require('.././assets/garden.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/keshi.jpg'),
  thumbnail: require('.././assets/keshi.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/kiss-beach.jpg'),
  thumbnail: require('.././assets/kiss-beach.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/kiss-grab.jpg'),
  thumbnail: require('.././assets/kiss-grab.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/quesadilla.jpg'),
  thumbnail: require('.././assets/quesadilla.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/sad.jpg'),
  thumbnail: require('.././assets/sad.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/tongue.jpg'),
  thumbnail: require('.././assets/tongue.jpg'),
  thumbnailHeight: '80px',
},

{
  original: require('.././assets/picnic.JPG'),
  thumbnail: require('.././assets/picnic.JPG'),
  thumbnailHeight: '80px',
},

{
  original: require('.././assets/picnic-2.jpg'),
  thumbnail: require('.././assets/picnic-2.jpg'),
  thumbnailHeight: '80px',
},

{
  original: require('.././assets/picnic-3.jpg'),
  thumbnail: require('.././assets/picnic-3.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/topworld.jpg'),
  thumbnail: require('.././assets/topworld.jpg'),
  thumbnailHeight: '80px',
},

{
  original: require('.././assets/disney-2.jpg'),
  thumbnail: require('.././assets/disney-2.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/anni.jpg'),
  thumbnail: require('.././assets/anni.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/beah-3.jpg'),
  thumbnail: require('.././assets/beah-3.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/pier.jpg'),
  thumbnail: require('.././assets/pier.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/pool.jpg'),
  thumbnail: require('.././assets/pool.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/tree.jpg'),
  thumbnail: require('.././assets/tree.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/ucla.jpg'),
  thumbnail: require('.././assets/ucla.jpg'),
  thumbnailHeight: '80px',
},
];

const images2 =
[{
  original: require('.././assets/blasteran.jpg'),
  thumbnail: require('.././assets/blasteran.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/burrito.jpg'),
  thumbnail: require('.././assets/burrito.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/chomp.jpg'),
  thumbnail: require('.././assets/chomp.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/ini.jpg'),
  thumbnail: require('.././assets/ini.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/nep.jpg'),
  thumbnail: require('.././assets/nep.jpg'),
  thumbnailHeight: '80px',
},

{
  original: require('.././assets/sushi.jpg'),
  thumbnail: require('.././assets/sushi.jpg'),
  thumbnailHeight: '80px',
},
];

const images3 =
[{
  original: require('.././assets/beach.jpg'),
  thumbnail: require('.././assets/beach.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/disney.jpg'),
  thumbnail: require('.././assets/disney.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/flowers.jpg'),
  thumbnail: require('.././assets/flowers.jpg'),
  thumbnailHeight: '80px',
},
{
  original: require('.././assets/topworld-2.jpg'),
  thumbnail: require('.././assets/topworld-2.jpg'),
  thumbnailHeight: '80px',
},

{
  original: require('.././assets/yuki.jpg'),
  thumbnail: require('.././assets/yuki.jpg'),
  thumbnailHeight: '80px',
},

{
  original: require('.././assets/yuki-2.jpg'),
  thumbnail: require('.././assets/yuki-2.jpg'),
  thumbnailHeight: '80px',
},

{
  original: require('.././assets/selfie.JPG'),
  thumbnail: require('.././assets/selfie.JPG'),
  thumbnailHeight: '80px',
},

{
  original: require('.././assets/ghibli.jpg'),
  thumbnail: require('.././assets/ghibli.jpg'),
  thumbnailHeight: '80px',
},

{
  original: require('.././assets/ghibli-2.jpg'),
  thumbnail: require('.././assets/ghibli-2.jpg'),
  thumbnailHeight: '80px',
},

{
  original: require('.././assets/keshi-2.jpg'),
  thumbnail: require('.././assets/keshi-2.jpg'),
  thumbnailHeight: '80px',
},
];

const images = [[], images1, images2, images3]
const data = [
    {
      id: 1,
      title: "<3",
      img: 'https://media.giphy.com/media/EGNi09y1CXeyA/giphy.gif',
      handleClick(setGalOpen, galOpen) {setGalOpen(1)},
      },
    {
      id: 2,
      title: "nom",
      img: 'https://media.giphy.com/media/10a8AOSeP6Rqfu/giphy.gif',
      handleClick(setGalOpen, galOpen) {setGalOpen(2)},
      },
      {
        id: 3,
        title: "she's beautiful",
        img: 'https://media.giphy.com/media/cxdu4okJoPZfy/giphy.gif',
        handleClick(setGalOpen, galOpen) {setGalOpen(3)},
        },
  ];



    return (
    <div className="pics">  
    <div className='title'>Reminiscing...</div>  
    <div className="container">
        {data.map((d)=> (
          <div className="item" onClick={() => d.handleClick(setGalOpen, galOpen)}>
          <img src={d.img} alt={d.id}></img>
          <h3>{d.title}</h3>
        </div>
        ))}
    </div>

    <div className= {"gallery " + (galOpen !== 0 && "active")}>          
    <span class="close" onClick={() => {setGalOpen(0)}}>&times;</span>
    <div className="carousel"> 
    <ImageGallery items={images[galOpen]}/>
    </div>
  </div>
  </div>
);
}