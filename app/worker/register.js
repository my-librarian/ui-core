import 'file-loader?name=worker.js!./worker.js';

export const registerWorker = () => {

  if ('serviceWorker' in navigator) {

    navigator.serviceWorker
      .register('/worker.js');

  }

};
