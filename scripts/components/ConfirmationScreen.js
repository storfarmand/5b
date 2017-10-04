import React from 'react';
import ReactDOM from 'react-dom';

import Mainstage from './Mainstage';
import Button from './Button';

export default class ConfirmationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
  }
  animateIn(){
    const that = this;
    TweenMax.set([this.confirmElement, this.rejectElement],
      {
        alpha: 0
      }
    );
    TweenMax.fromTo(this.confirmationScreenElement, 1,
      {
        y:-1000,
        ease:Elastic.easeOut
      }, {
        y:0,
        onComplete: () => {
          TweenMax.staggerFromTo([that.confirmElement, that.rejectElement], 1,
            {
              alpha:0,
              scaleX:0
            }, {
              alpha:1,
              scaleX:1
            },
          0.3);
        }
      }
    );

  }

  animateOut(){
    //TweenMax.fromTo(this.confirmationScreenElement, 1, {y:0}, {y:-1000, ease:Back.easeIn});
  }
  componentDidUpdate() {
    if (this.props.show) {
      this.animateIn();
    } else {
      this.animateOut();
    }
  }
  componentDidMount(){
    this.setState({
        mounted: true
    });
    this.modalElement = ReactDOM.findDOMNode(this.modal);
    this.confirmationScreenElement = ReactDOM.findDOMNode(this.confirmationScreen);
    this.confirmElement = ReactDOM.findDOMNode(this.confirm);
    this.rejectElement = ReactDOM.findDOMNode(this.reject);
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
          this.props.show ? 'show': '',
          'confirmationscreen-container',
          'modal'
        ].join(' ')}
        ref={(modal) => {this.modal = modal}}
        >
        <div
          class='confirmationscreen'
          ref={(div) => {this.confirmationScreen = div}}
        >
          <h3 class="confirmscreen-heading">{this.props.content.headings.confirmation}</h3>
          <Mainstage
            config={this.props.config}
            displayNames={this.props.displayNames}
            avatars={this.props.avatars}
            selected={this.props.selected}
          />
          <Button
            action="confirm"
            type="secondary"
            target="displayname"
            text={this.props.content.buttons.name.secondary.confirm}
            ref={(button) => {this.confirm = button}}
          />
          <Button
            action="reject"
            type="secondary"
            target="displayname"
            text={this.props.content.buttons.name.secondary.reject}
            ref={(button) => {this.reject = button}}
          />
        </div>
      </div>
    );
  }
}
