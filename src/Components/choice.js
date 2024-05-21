import React from 'react';
import './choice.css';

const Choice = () =>{
    return(
        <div className='mm2'>
        <p className='p9'>Apply On Any Section Or Enable For Whole Page</p>
        <div className='m-c'>
        <div className='choice-container1'>
            <p className='p10'>Apply On Section</p>
            <p  className='p11'> Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
            <img src='/motionarteffect-img11.png' alt='logo' className='img1'></img>
        </div>

        <div className='choice-container2'>
            <p className='p10'> Apply On Page</p>
            <p className='p11'>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
            <img src='/motionarteffect-img10.png' alt='logo' className='img1'></img>
        </div>
        </div>
        </div>
    )
}

export default Choice;