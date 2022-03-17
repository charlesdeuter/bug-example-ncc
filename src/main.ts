import Rollbar from 'rollbar';

const rollbar = new Rollbar({
  accessToken: 'POST_SERVER_ITEM_ACCESS_TOKEN',
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    code_version: '1.0.0',
  }
});

console.log('hello-world');

