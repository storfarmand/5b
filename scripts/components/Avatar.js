import React from 'react';

import AvatarImage from './AvatarImage';

export default class Avatar extends React.Component {
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
  render() {
    const bgColor = this.props.selected.brick >= 0 ? this.props.config.colorCodes[this.props.selected.brick] : '#ffffff';
    return (
      <div
        class={[
          "avatar-container"
        ].join(' ')}
      >
        <AvatarImage
          config={this.props.config}
          selected={this.props.selected}
          avatars={this.props.avatars}
          bg={bgColor}
        />
        <img
          class={[
            "avatar-paperclip"
          ].join(' ')}
          src={require('../../assets/paperclip.png')}
          alt="paperclip"
        />
      </div>
    );
  }
}
