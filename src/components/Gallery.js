import React from "react";
import '../components/Gallery.css';
import ImageGallery from 'react-image-gallery';



const photo1 = require('../images/1.jpg');
const photo2 = require('../images/2.jpg');
const photo3 = require('../images/3.jpg');


const images = [
    {
      original: photo1,
      thumbnail: photo1,
      thumbnailLabel: "",
      description: "",
      sizes: 10,
      
    },
    {
      original: photo2,
      thumbnail: photo2,
      height: '10',
    
    },
    {
      original: photo3,
      thumbnail: photo3,
    },
  ];
  




const Gallery = () => {
    return (
        // <div className="Gallery">

        //     <img className="selected" src={photo1} width={1000} onMouseOver=""  alt='a'/>
            
        //         <li>
        //             <img src={photo2} height={200} onClick={() => imageClick()}  alt='a' />
        //             <img src={photo3} height={200}  alt='a' />
        //             <img src={photo4} height={200} alt='a' />
        //         </li>
           
            
        // </div>
        <div className="container-fluid slider">
            <ImageGallery className="pictures" items={images} image-gallery-slide='width:50%' />

        </div>





    );
}

export default Gallery;