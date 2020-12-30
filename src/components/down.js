import React, { useEffect, createRef } from "react";

import lottie from "lottie-web";
import animation from "https://drive.google.com/file/d/1ewDPQ-w_PTm5yvMHKyDFCU4hK-ryb1aO/view?usp=sharing";
import './down.css'


const Down = () => {
  let animationContainer = createRef();

  lottie.loadAnimation({
        container: animationContainer.current,
        animationData: animation, // animation file!
        renderer: "svg",
        loop: true,
        autoplay: true
      });

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);

  return (
    <div className="App">
        <div className="animation-container" ref={animationContainer} />
    </div>
  );
};

export default Down;
