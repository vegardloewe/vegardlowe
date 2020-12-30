import React, { Component } from "react";

import Lottie from "./animations/lottie.js";
import './down.css'



class Down extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require('./animations/down.json'),
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <Lottie options={defaultOptions}
              height={200}
              width={200}
        />
      </div>
    )
  }
}

export default Down
