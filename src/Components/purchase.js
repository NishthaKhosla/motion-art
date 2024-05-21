import React from "react";
import './purchase.css'

const Purchase = () => {
  const navigate = () => {
    window.open('https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891', '_blank');
  };
  return (

    
    <div className="intro">
      <div className="leftt">
        <p className="p7">Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</p>
        <p className="p8">Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
        <div className="arrowbtn">
        <button className="btn" onClick={navigate}>Purchase from Envato    
        <img src="/icons8-arrow-30.png" alt="arrow" className="arrowimg"></img></button>
        </div>
      </div>
      <div className="rightt">
        <img src="/motionarteffect-img5.png" alt="logo" className='img'></img>
      </div>
    </div>
  );
}

export default Purchase;
