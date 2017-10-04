import React from 'react';
import ReactDOM from 'react-dom';

import ListItemStore from '../stores/ListItemStore';
import * as ListItemActions from '../actions/ListItemActions';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      shake: false
    };
  }
  inViewport(props) {
    if (!this.state.mounted) {
      return false;
    }
    const viewport = document.querySelector('.slider.'+props.type+' .slider-viewport');
    const list = viewport.querySelector('.slider-list').getBoundingClientRect();
    const item = ReactDOM.findDOMNode(this.item);
    return (item.offsetLeft + item.clientWidth) > Math.abs(list.left) &&
            item.offsetLeft - Math.abs(list.left) < viewport.clientWidth;
  }
  shake(shake) {
    this.setState({
      shake
    });
  }
  componentWillMount() {
    ListItemStore.on('list:item:shake:request', (obj) => {
      if (parseInt(obj.idx, 10) === this.props.idx && obj.type === this.props.type) {
        this.inViewport(this.props) && this.shake(true);
        setTimeout(() => {
          ListItemActions.shake({
            action: 'response',
            type: obj.type,
            idx: obj.idx,
            value: this.inViewport(this.props)
          });
        }, 0);
      } else {
        this.shake(false);
      }
    });
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
      <li
        class={[
          this.props.type,
          this.props.active ? 'active' : '',
          this.state.shake ? 'shake' : ''
        ].join(' ')}
        data-idx={this.props.idx}
        onClick={this.props.handleClick}
        ref={(item) => {this.item = item}}
      ><img src={require('../../assets/'+this.props.type+'s/' + this.props.img)} /></li>
    );
  }
}
