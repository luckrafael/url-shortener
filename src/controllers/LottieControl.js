// ControlledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../public/43885-laptop-working.json'

class ControlledLottie extends Component {
  state = {isStopped: false, isPaused: false}

  render(){
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMinYMax slice'
      }
    };

    return(
      <div className="controlled">
        <Lottie options={defaultOptions}
              height={483}
              width={699}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}
        />

      </div>
    )
  }
}

export default ControlledLottie