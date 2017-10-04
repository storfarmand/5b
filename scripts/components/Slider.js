import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'gsap/Draggable';
import TweenMax from 'gsap';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      list: props.items
    };
  }
  componentDidMount() {
    this.setState({
      mounted: true
    });
    this.viewportWidth = parseInt(this.viewport.getBoundingClientRect().width, 10);
    this.sliderWidth = parseInt(this.slider.getBoundingClientRect().width, 10);
    this.overflow = this.sliderWidth - this.viewportWidth;
    const eleSlider = ReactDOM.findDOMNode(this.slider);
    Draggable.create(eleSlider, {
      "type": "x",
      "bounds": this.viewport,
      "minX": (this.overflow * -1),
      throwProps: true
    });

    const sliderItems = eleSlider.getElementsByTagName('li');
    //TweenMax.staggerFrom(sliderItems, 1, {x: 1200, ease: Expo.easeOut}, 0.2);
  }
  componentWillUnmount() {
    this.setState({
      mounted: false
    });
  }
  render() {
    return (
      <div class={[
             'react-slider'
           ].join(' ')}
      >
        <div ref={(viewport) => {this.viewport = viewport}}
             class="slider-viewport"
        >
          <ul ref={(slider) => {this.slider = slider}}
              class={[
                'slider-list'
              ].join(' ')}
          >
            {this.props.items}
          </ul>
        </div>
      </div>
    );
  }
}
