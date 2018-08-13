import React, { Component } from 'react';
import Loadable from 'react-loadable';
import MyLoadingComponent from './dev/js/containers/common/components/Loader/Loading';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';
import App from './App';


const AsyncMemesGenerator = Loadable({
    loader: () => import('./dev/js/containers/createFile/presentation/MemesManagement'),
    loading: MyLoadingComponent,
    timeout: 2000
});





export default class AsyncComponentLoader extends Component {
    constructor(props, context) {
        super();
        this.state = {
        
        }
        this.viewHanlder = this.viewHanlder.bind(this);
    }

      viewHanlder(event) {
          if(event.location.pathname!="/")
            hashHistory.push("/");
      }

  

    render() {
        return (
            <div>
                <App >
                    <Router history={hashHistory}>
                        <Route path="/" onEnter={this.viewHanlder.bind(this)} component={AsyncMemesGenerator} />
                    </Router>
                </App>
            </div>)
    }
}

function authenticateFunc(transition, replace) {
    switch (transition.location.pathname) {
        case "/":
            break;
        default:
            break;
    }
}
