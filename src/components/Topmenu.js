import React from 'react';
import '../components/Topmenu.css';
import { Link } from 'react-router-dom'
import logo from '../images/websiteLogo.png'





class Topmenu extends React.Component{


    render() {

        return (

            <>
    
                <div class="navbar bg-base-100 bg-carbon/[.25] " >
                    <div class="navbar-start basis-auto">   
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost btn-circle ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentcolor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to='/'> <li><div>Homepage</div></li></Link>
                                <Link to='/portfolio'><li><div>Portfolio</div></li></Link>
                                <Link to='/Automotive'><li><div>Automotive</div></li></Link>
                                <Link to='/Portraits'><li><div>Portraits</div></li></Link>
                                <Link to='/Drone'><li><div>Drone</div></li></Link>
                                <Link to='/Land'><li><div>Land</div></li></Link>
                                <Link to='/About'><li><div>About</div></li></Link>
                                <Link to='/Contact'><li><div>Contact</div></li></Link>
                               
    
    
                            </ul>
                        </div>
                    </div>
                    <div class="navbar-center text-left  basis-auto ">
                        <Link to='/'><div class="btn btn-ghost normal-case text-xl " >Jushustudios</div></Link>
    
                    </div>
                    <div class="navbar-end text-left  basis-auto ">
                        <Link to='/'><img className='logo' src={logo} alt='img'></img></Link>
                       
                    </div>
                    
                </div>
    
            </>
    
    
    
    
        );
    }
    
}

export default Topmenu;