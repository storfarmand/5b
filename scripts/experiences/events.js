import React from 'react';

import Event from '../components/Event';

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
    const events = this.props.events.map((event, idx) => {
      return <Event key={idx} config={event} content={this.props.content} />
    })
    return (
      <div
        class={[
          "5b",
          "events"
        ].join(' ')}
        ref={(experience) => {this.events = experience}}
      >
      {events}
      </div>
    );
  }
}
