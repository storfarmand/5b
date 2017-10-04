import React from 'react';

import Avatar from '../components/Avatar';
import DisplayName from '../components/DisplayName';

export default class Mainstage extends React.Component {
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
    return (
      <div
        class={[
          "mainstage"
        ].join(' ')}
        ref={(component) => {this.mainstage = component}}
      >
        <Avatar
          config={this.props.config}
          selected={this.props.selected}
          avatars={this.props.avatars}
        />
        <DisplayName
          config={this.props.config}
          selected={this.props.selected}
          displayNames={this.props.displayNames}
        />
      </div>
    )
  }
}
