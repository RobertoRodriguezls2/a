import React from 'react'

import { Link } from 'react-router-dom'



function SideCard( {title, body, firstbtn, secondbtn, firstbtnmsg, secondbtnmsg } ) {

    
    return (
        <div class="">
            <div class="card card-side bg-base-100 shadow-xl">
  <figure></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{body}</p>
    <div class="card-actions justify-end">
        <Link to={firstbtn}>
        <button class="btn btn-primary">{firstbtnmsg}</button>
        </Link>
        {
            (secondbtn ? <Link to={secondbtn}>
                <button class="btn btn-primary">{secondbtnmsg}</button>
                </Link> : <div/> )
            
        }
        
      
    </div>
  </div>
</div>
        </div>

    )
}

export default SideCard