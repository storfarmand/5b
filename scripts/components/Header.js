import React from 'react';

export default class Header extends React.Component {
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
    const HeaderTag = `h${this.props.type}`;
    return (
      <HeaderTag
        class={[
          "header"
        ].join(' ')}
        ref={(component) => {this.header = component}}
      >
        {this.props.text}
      </HeaderTag>
    );
  }
}
