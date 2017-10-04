import dispatcher from '../dispatcher';

export function select(data) {
  dispatcher.dispatch({
    type: "LISTITEM",
    action: "SELECT",
    data
  });
}

export function deselect(data) {
  dispatcher.dispatch({
    type: "LISTITEM",
    action: "DESELECT",
    data
  });
}

export function shake(data) {
  dispatcher.dispatch({
    type: "LISTITEM",
    action: "SHAKE",
    data
  });
}
