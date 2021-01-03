import React, { useEffect, createRef, Component } from "react";


import './down.css'
import animation from './animations/down.json'


class Down extends React.Component {
    componentDidMount () {
        const lottie = window.lottie

        let animationContainer = createRef()

        lottie.loadAnimation({
            container: animationContainer.current, // current instance of our container!
            animationData: animation, // animation file!
            renderer: "svg",
            loop: true,
            autoplay: true
          });
      }

        render() {
        return
            <div className="App">
                 <div className="animation-container" ref={animationContainer} />
            </div>
}
}


export default Down;
