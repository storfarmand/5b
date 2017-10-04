import { EventEmitter } from "events";

import dispatcher from '../dispatcher';

class ListItemStore extends EventEmitter {
  constructor() {
    super();
    this.setMaxListeners(50);
  }

  select(obj) {
    this.emit('list:item:selected', obj);
  }
  deselect(obj) {
    this.emit('list:item:selected', obj);
  }
  shake(obj) {
    switch (obj.action) {
      case "request":
        this.emit('list:item:shake:request', {type: obj.type, idx: obj.idx});
        break;
      case "response":
        this.emit('list:item:shake:response', {type: obj.type, idx: obj.idx, value: obj.value});
        break;
    }
  }

  handleActions(evt) {
    switch(evt.type) {
      case "LISTITEM":
        switch (evt.action) {
          case "SELECT":
            this.select(evt.data);
            break;
          case "DESELECT":
            this.deselect(evt.data);
            break;
          case "SHAKE":
            this.shake(evt.data);
            break;
        }
        break;
    }
  }

}

const listItemStore = new ListItemStore;
dispatcher.register(listItemStore.handleActions.bind(listItemStore));

export default listItemStore;
