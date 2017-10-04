import React from "react";
import ReactDOM from 'react-dom';

import TweenMax from 'gsap';

export default class DisplayName extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      animating: false,
      animation: null
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.selected.minibuild !== nextProps.selected.minibuild
  }

  componentWillUpdate(nextProps,nextState){
    if (this.state.animating && this.state.animation){
      this.killTweens();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.animateRandom();
  }

  componentDidMount() {
    this.setState({
        mounted: true
    })
  }
  componentWillUnmount() {
    this.setState({
        mounted: false
    })
  }
  killTweens(){
    if (this.state.animation){
      this.state.animation.forEach((tween) =>{
        tween.kill();
      });
      this.state.animation = null;
    }
  }

  animateRandom(){
    this.killTweens();

    this.state.animating = true;
    const element = ReactDOM.findDOMNode(this.span);
    //TweenMax.fromTo(element, 1 ,{alpha: 0}, {alpha: 1});
    let split = new SplitText(element);
    TweenLite.set(element, {perspective: 400});

    this.state.animation = new TweenMax.staggerFrom(split.chars, 1.3,{opacity: 0,
                                        scale:0,
                                        y: this.getRandomInt(-100,100),
                                        x: this.getRandomInt(-100,100),
                                        rotationX: this.getRandomInt(-720,720),
                                        rotationY: this.getRandomInt(-720, 720),
                                        rotationZ: this.getRandomInt(-720,720),
                                        transformOrigin: "0% 50% -50",
                                        ease:Back.easeOut}, 0.015, ()=>{
                                            split.revert();
                                            this.state.animating = false;
                                        });
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render(){
    const displayName = this.props.selected.minibuild >= 0 ? this.props.displayNames[this.props.selected.minibuild] : '';
    return (
      <div
        class={[
          "display-name"
        ].join(' ')}
      >
        <p>
          <span
            class={[
              "displayname-word"
            ].join(' ')}
            ref={(span) => {this.span = span;}}
          >
            {displayName.replace(/([A-Z])/g, ' - $1').trim().substr(2)}
          </span>
        </p>
      </div>
    );
  }
}
