import React from "react";
import TweenMax from 'gsap';
export default class AvatarImage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
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
  render(){
    const bgStyle = {
      backgroundColor: this.props.bg
    };
    const avatarUri = this.props.selected.minifig >= 0 ? this.props.avatars[this.props.selected.minifig].avatarImageUri : "default.png";
    return (
      <div
        class={[
          "avatar"
        ].join(' ')}
        style={bgStyle}
      >
        <img
          src={avatarUri}
          ref={(img) => {this.img = img}}
        />
      </div>
    );
  }
}
