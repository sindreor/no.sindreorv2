import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/main/Main';
import ProfileTalker from './components/profileTalker/ProfileTalker';
import * as serviceWorker from './serviceWorker';

var content = require('./content.json');

ReactDOM.render(
  <Main info={content.info} contactDetails={content.contactDetails}>
    <ProfileTalker/>
  </Main>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
