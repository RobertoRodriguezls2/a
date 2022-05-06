
import React, { useRef, useLayoutEffect, useState } from 'react';
import './Card.css';
import { Router, Route, Routes, } from 'react-router-dom'

import { Link } from 'react-router-dom'



function CardII({ image, title, body, page, btnmsg, url }) {
    const imgElement = React.useRef(null);
    const projects = 'projects'
    const vids = 'vids'
    const imgHeights = {};
    const imgsize = new Image();
    imgsize.src = image;
    imgsize.width = image;
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    useLayoutEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            });
        }
    }, []);


    return (


        <div class="card sm:h-[auto] sm:w-[96] w-196 bg-base-100 shadow-xl  bg-carbon/[.25]" ref={targetRef}>
            <figure class="px-10 pt-10 " className='piccont'>
              
                     <img src={image} alt="Shoes"
                        ref={imgElement}
                        class="rounded-xl object-contain"
                        className='picgalW'
                        onLoad={( () => {console.log(imgElement.current.naturalWidth)})}
                    />
                

            
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>{body}</p>
                <div class="card-actions flex sm:flex-row flex-col ">
                    
                        {
                            ((page == vids || page == projects) ?
                                <a href={url}>
                                        <button class="btn btn-primary">{btnmsg}</button>
                                </a>
                                : <Link to={page}>
                                <button class="btn btn-primary">{btnmsg}</button>
                            </Link>)

                        }
                       
                </div>
            </div>
        </div>
    )
}

export default CardII