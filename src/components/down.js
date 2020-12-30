import React, { useEffect, createRef } from "react";

import Lottie from "lottie-web";
import animation from "./animations/down.json";
import './down.css'


const Down = () => {
  let animationContainer = createRef();

      const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };

  return (
    <div className="App">
    <Lottie options={defaultOptions}
          height={400}
          width={400}
    />
    </div>
  );
};

export default Down;
