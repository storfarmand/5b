import { EventEmitter } from "events";

import dispatcher from '../dispatcher';

class PageStore extends EventEmitter {
  constructor() {
    super();
    this.setMaxListeners(50);
  }

  close(page) {
    this.emit('page:close', page);
  }

  handleActions(evt) {
    switch(evt.type) {
      case "BUTTON":
        switch (evt.action) {
          case "CLOSE":
            evt.data &&
              evt.data.type &&
              evt.data.type === 'page' &&
              this.close(evt.data.props.page);
            break;
        }
        break;
    }
  }

}

const pageStore = new PageStore;
dispatcher.register(pageStore.handleActions.bind(pageStore));

export default pageStore;
