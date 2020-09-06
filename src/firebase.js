import {apiKeyHidden} from './config';
import firebase from 'firebase';

// Set the configuration for your app
// TODO: Replace with your project's config object

var config = {
  // apiKey: apiKeyHidden,
  // authDomain: "bruin-racing.firebaseapp.com",
  // databaseURL: "https://bruin-racing.firebaseio.com",
  // projectId: "bruin-racing",
  // storageBucket: "bucket.appspot.com",
  apiKey: apiKeyHidden,
  authDomain: "smv-daq.firebaseapp.com",
  databaseURL: "https://smv-daq.firebaseio.com",
  projectId: "smv-daq",
  storageBucket: "bucket.appspot.com"
};

firebase.initializeApp(config);

export default firebase;