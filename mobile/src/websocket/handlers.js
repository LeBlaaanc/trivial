import { store } from '../redux';

export const onMessage = (m) => {
  if (!m.data) return;
  const message = JSON.parse(m.data);

  // if (!message.resource || !message.action) return;
  store.dispatch({
    type: 'round/NEXT_QUESTION',
    question: message.question,
  });
  alert(message.question);
};

export const onClose = (m) => {
  store.dispatch({
    type: 'websocket/DISCONNECTED',
  });
};

export const onError = (m) => {
  store.dispatch({
    type: 'websocket/ERROR',
  });
};

export const onOpen = (m) => {
  store.dispatch({
    type: 'websocket/CONNECTED',
  });
};
