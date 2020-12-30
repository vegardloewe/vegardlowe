import React, { Component } from "react";

import Lottie from "lottie-web";
import animationData from "./animations/down.json";
import './down.css'


class Down extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
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
