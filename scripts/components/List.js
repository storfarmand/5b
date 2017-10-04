import React from 'react';
import ReactDOM from 'react-dom';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      items: props.items,
      active: 0,
      dragging: false
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
  activate(idx) {
    this.setState({
      active: idx
    });
  }
  render() {
    const items = this.state.items.map((item, idx) => {
      return <li
          class={[
            this.state.active === idx ? 'active' : ''
          ].join(' ')}
          key={idx}
          onClick={this.activate(idx).bind(this)}
        ><img src={item}/></li>;
    });
    return (
      <div class={[
             'react-list'
           ].join(' ')}
      >
        <ul ref={(list) => {this.list = list}}
            class={[
              'list'
            ].join(' ')}
        >
          {items}
        </ul>
      </div>
    );
  }
}
