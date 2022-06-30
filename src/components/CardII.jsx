
import React, { useRef} from 'react';
import './Card.css';
import Button from './Button';



import { Link } from 'react-router-dom'



function CardII({ image, title, body, page, btnmsg, url }) {
    const imgElement = React.useRef(null);
    const projects = 'projects'
    const vids = 'vids'

    const imgsize = new Image();
    imgsize.src = image;
    imgsize.width = image;
    const targetRef = useRef();



    return (


        <div class="card sm:h-[auto] sm:w-[96] w-196 bg-base-100 shadow-xl  bg-carbon/[.25]" ref={targetRef}>
            <figure class="px-10 pt-10 " className='piccont'>
                 <img src={image} alt="Shoes"
                        ref={imgElement}
                        class="min-w-0 rounded-xl  object-contain"
                        loading="lazy"
                        className='picgalW'
                        
                    />
            

                {/* <img src={image} alt="Shoes" class="min-w-0 rounded-xl  object-contain" className='picgal' /> */}
            </figure>
            <div className='cardbtn' class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>{body}</p>
                <div  class="card-actions flex sm:flex-row flex-col ">

                    {/* {
                        ((page == vids || page == projects) ?
                            <Button url={url} btnmsg={btnmsg} />
                            : <Link className='linkcont' to={page}><Button btnmsg={btnmsg}/></Link>)

                    } */}
                    {
                        ((page === vids || page === projects) ?
                        <Button url={url} btnmsg={btnmsg} />
                            : <Link role="button" tabIndex="0" className='linkcont' to={page}> <div className='collection' style={{ '--clr': '#1e9bff' }}><span>{btnmsg}</span><i></i></div></Link>)

                    }



                </div>
            </div>
        </div>
    )
}

export default CardII