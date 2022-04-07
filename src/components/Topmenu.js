import React, { useState } from 'react';
import '../components/Topmenu.css';
import { Link } from 'react-router-dom'




class Topmenu extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
            count: 0

        }
    }

    render() {

        return (

            <>
    
                <div class="navbar bg-base-100 bg-carbon/[.25] " >
                    <div class="navbar-start  basis-auto">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost btn-circle ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentcolor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to='/'> <li><a>Homepage</a></li> </Link>
                                <Link to='/portfolio'> <li><a>Portfolio</a></li> </Link>
                                <Link to='/Automotive'> <li><a>Automotive</a></li> </Link>
                                <Link to='/Portraits'> <li><a>Portraits</a></li> </Link>
                                <Link to='/Drone'> <li><a>Drone</a></li> </Link>
                                <Link to='/Land'> <li><a>Land</a></li> </Link>
                                <Link to='/About'> <li><a>About</a></li> </Link>
                                <Link to='/Contact'> <li><a>Contact</a></li> </Link>
                               
    
    
                            </ul>
                        </div>
                    </div>
                    <div class="navbar-center text-left  basis-auto ">
                        <Link to='/'> <a class="btn btn-ghost normal-case text-xl " >Jushustudios</a> </Link>
    
                    </div>
                    <div class="navbar-end text-left  basis-auto ">
                        <button onClick={() => this.setState({count: this.state.count + 1})}>{this.state.count}</button>
                    </div>
                </div>
    
            </>
    
    
    
    
        );
    }
    
}

export default Topmenu;