import React from 'react'
import Topmenu from '../components/Topmenu'
import SideCard from '../components/SideCard'


function About() {
    return (
        <>
            <div>
                <Topmenu />
                <div className='cont'>
                    <SideCard
                        title="About me"
                        body="A photographer from SoCal who specializes in Automotive and Landscape photography using professional equipment.
                         A recent graduate in Computer Science I have many hobbies from designing and programming electronic components to professional photography. 
                         I can handle any of your photo and video needs and ideas that you may have. I've covered all sorts of subjects from people to medicinal products.                         
                         I have my part 107 certification so I can legally cover your drone needs without you having to worry.
                         Born and raised in the SouthBay I know plenty of locations to capture your ideas with quick turn around times so you can enjoy and share
                         those images quickly. Contact me for any inquiries or follow any of my socials below to see what I'm up to.
                         If you're interested in any of my programming projects you can check out my github linked below."
                         firstbtn={"/About"}
                         firstbtnmsg={"Contact"}
                         
                    />
                </div>

            </div>
        </>

    )
}

export default About