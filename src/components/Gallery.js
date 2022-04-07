import React from "react";
import '../components/Gallery.css';
import ImageGallery from 'react-image-gallery';



const photo1 = require('../images/1.jpg');
const photo2 = require('../images/2.jpg');
const photo3 = require('../images/3.jpg');
const photo4 = require('../images/4.jpg');
const photo5 = require('../images/5.jpg');
const photo6 = require('../images/6.jpg');
const photo7 = require('../images/7.jpg');
const photo8 = require('../images/8.jpg');
const photo9 = require('../images/9.jpg');
const photo10 = require('../images/10.jpg');
const photo11 = require('../images/11.jpg');
const photo12 = require('../images/12.jpg');
const photo13 = require('../images/13.jpg');


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
    {
      original: photo4,
      thumbnail: photo4,
      height: '10',
    
    },
    {
      original: photo5,
      thumbnail: photo5,
      height: '10',
    
    },
    {
      original: photo6,
      thumbnail: photo6,
      height: '10',
    
    },
    {
      original: photo7,
      thumbnail: photo7,
      height: '10',
    
    },
    {
      original: photo8,
      thumbnail: photo8,
      height: '10',
    
    },
    {
      original: photo9,
      thumbnail: photo9,
      height: '10',
    
    },
    {
      original: photo10,
      thumbnail: photo10,
      height: '10',
    
    },
    {
      original: photo11,
      thumbnail: photo11,
      height: '10',
    
    },
    {
      original: photo12,
      thumbnail: photo12,
      height: '10',
    
    },
    {
      original: photo13,
      thumbnail: photo13,
      height: '10',
    
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