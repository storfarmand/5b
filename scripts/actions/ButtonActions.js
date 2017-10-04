import dispatcher from '../dispatcher';

export function close(data) {
  dispatcher.dispatch({
    type: "BUTTON",
    action: "CLOSE",
    data
  });
}

export function confirm(data) {
  dispatcher.dispatch({
    type: "BUTTON",
    action: "CONFIRM",
    data
  });
}

export function reject(data) {
  dispatcher.dispatch({
    type: "BUTTON",
    action: "REJECT",
    data
  });
}
