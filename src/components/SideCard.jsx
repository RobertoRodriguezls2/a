import React from 'react'

import { Link } from 'react-router-dom'
import Button from './Button'



function SideCard({ title, body, firstbtn, secondbtn, firstbtnmsg, secondbtnmsg }) {


    return (
        <div class="">
            <div class="card card-side bg-base-100 shadow-xl">
                <figure></figure>
                <div class="card-body">
                    <h2 class="card-title">{title}</h2>
                    <p>{body}</p>
                    <div class="card-actions justify-center pt-3">

                        
                            
                            <Link className='btnbottom' to={firstbtn}>
                                <Button btnmsg={firstbtnmsg} />
                            </Link>
                            {
                                (secondbtn ? <Link  to={secondbtn}>
                                    <Button btnmsg={secondbtnmsg} />
                                </Link> : <div />)

                            }
                       
                        {/* <Link className='btnbottom' to={firstbtn}>
                            <Button btnmsg={firstbtnmsg} />
                        </Link>
                        {
                            (secondbtn ? <Link className='btnbottom' to={secondbtn}>
                                <Button  btnmsg={secondbtnmsg} />
                            </Link> : <div />)

                        } */}


                    </div>
                </div>
            </div>
        </div>

    )
}

export default SideCard