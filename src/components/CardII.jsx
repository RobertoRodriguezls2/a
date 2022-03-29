import React from 'react'
import './Card.css';
import { Router, Route, Routes, } from 'react-router-dom'
import { Link } from 'react-router-dom'

function CardII({ image, title, body, page }) {
    return (


        <div class="card sm:h-[auto] sm:w-[96] w-196 bg-base-100 shadow-xl  bg-carbon/[.25]">
            <figure class="px-2 pt-10 ">
                <img src={image} alt="Shoes" class="min-w-0 rounded-xl  object-contain" className='picgal' />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>{body}</p>
                <div class="card-actions flex sm:flex-row flex-col ">
                    <Link to={page}>
                        <button className='ban' class="btn  btn-primary">View Gallery</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardII