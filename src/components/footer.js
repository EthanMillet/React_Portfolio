import React from 'react';
import Github from '../assets/github.svg' 
import LinkedIn from '../assets/linkedin.svg' 
import Twitter from '../assets/twitter.svg' 

function footer() {
    return (
     <div className='text-bg-primary d-flex align-items-center justify-content-center' style={{width: "100%", height: "60px"}}>
        <a href="#about" className='row d-flex align-items-center justify-content-center'>
          <img src={Github} style={{width: "20%", height: 'auto'}} alt='Github Img Link'></img>
        </a>

        <a href="#about" className='row d-flex align-items-center justify-content-center'>
          <img src={LinkedIn} style={{width: "20%", height: 'auto'}} alt='LinkedIn Img Link'></img>
        </a>

        <a href="#about" className='row d-flex align-items-center justify-content-center'>
          <img src={Twitter} style={{width: '20%', height: 'auto'}} alt='Twitter Img Link'></img>
        </a>

     </div>
    );
  }

export default footer;