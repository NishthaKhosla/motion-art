import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <div className='footer'>
      <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
      <div className='footer-links'>
        <a href='https://qodematrix.com/docs/motion-art-for-elementor/' target='_blank' rel='noopener noreferrer'>Documentation</a>
        <a href='https://support.qodematrix.com/login' target='_blank' rel='noopener noreferrer'>Support</a>
      </div>
    </div>

   
  );
};

export default Footer;
