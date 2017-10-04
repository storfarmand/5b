import { EventEmitter } from "events";

import dispatcher from '../dispatcher';

class DisplayNameStore extends EventEmitter {
  constructor() {
    super();
    this.setMaxListeners(50);
  }

  confirm(target, type) {
    this.emit('confirm:' + type, target);
  }
  reject(target, type) {
    this.emit('reject:' + type, target);
  }

  handleActions(evt) {
    switch(evt.type) {
      case "BUTTON":
        switch (evt.action) {
          case "CONFIRM":
            evt.data &&
              evt.data.type &&
              this.confirm(evt.data.props.target, evt.data.type);
            break;
          case "REJECT":
            evt.data &&
              evt.data.type &&
              this.reject(evt.data.props.target, evt.data.type);
            break;
        }
        break;
    }
  }

}

const displayNameStore = new DisplayNameStore;
dispatcher.register(displayNameStore.handleActions.bind(displayNameStore));

export default displayNameStore;
