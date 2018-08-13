// import React from 'react';
import NProgress from 'react-nprogress/nprogress.js';

export default function MyLoadingComponent(props) {
  if(!document.getElementById('nprogress') && document.getElementById('root').childElementCount === 0){
    NProgress.start();
  }
  else{
    NProgress.done();
    return null;
  }
  if (props.isLoading) {
    // While our other component is loading...
    if (props.timedOut) {
      // In case we've timed out loading our other component.
      NProgress.done();
      return null;
    } else if (props.pastDelay) {
      // Display a loading screen after a set delay.
      NProgress.done();
      return null;
    } else {
      // Don't flash "Loading..." when we don't need to.
      NProgress.done();
      return null;
    }
  } else if (props.error) {
    // If we aren't loading, maybe
    NProgress.done();
    return null;
  } else {
    // This case shouldn't happen... but we'll return null anyways.
    NProgress.done();
    return null;
  }
}
