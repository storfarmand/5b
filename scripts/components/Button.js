import React from "react";

import * as ButtonActions from '../actions/ButtonActions';

export default class Button extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
  }
  componentDidMount() {
    this.setState({
        mounted: true
    });
    this.button.addEventListener('click', () => {
      ButtonActions[this.props.action]({type: this.props.type, props: this.props});
    });
  }
  componentWillUnmount() {
    this.setState({
        mounted: false
    })
  }
  render(){
    const buttonText = this.props.text ? this.props.text : ''
    return (
      <button
        class={[
          "btn",
          "btn-" + this.props.action,
          "btn-" + this.props.action + "-" + this.props.type
        ].join(' ')}
        ref={(btn) => {this.button = btn}}
      >
        {buttonText}
      </button>
    );
  }
}
