import React from 'react';

export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
    };
  }
  componentDidMount() {
    this.setState({
        mounted: true
    });
  }
  render() {
    return (
      <div
        class={[
          "5b",
          "events",
          this.state.ready ? 'ready' : 'loading'
        ].join(' ')}
        ref={(component) => {this.events = component}}
      >
      </div>
    );
  }
}
