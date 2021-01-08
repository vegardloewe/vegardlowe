import React, { useEffect, createRef, Component } from "react";

import lottie from "lottie-web"
import './down.css'
import animation from './animations/down.json'


const Down = () => {
  let animationContainer = createRef();

  lottie.loadAnimation({
        container: animationContainer.current, // current instance of our container!
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
