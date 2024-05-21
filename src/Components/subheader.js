import React from "react";
import "./subheader.css"; 




const SubHeader = () => {

  const navigate = () => {
    window.open('https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891', '_blank');
  };
  return (
    <div className="subheaders">
      <img src="/MotionArtEffect-logo.png" alt="Logo" className="sublogo" />
      <button onClick={navigate} className="subbutton">Purchase Now</button>
    </div>
  );
}

export default SubHeader;
