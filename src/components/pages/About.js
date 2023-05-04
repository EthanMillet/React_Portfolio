import React from 'react';
import logo from '../../assets/logo.png'
export default function About() {
  return (
    <div style={{width: "100%", marginTop: "5%", textAlign: "center", marginLeft: "25%"}}>
      <div style={{width: "50%", textAlign: "center"}}>
      <h1>About Me</h1>
      <img src={logo} alt='Logo' style={{width: "50%", height: "auto"}}></img>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      </div>
    </div>
  );
}
