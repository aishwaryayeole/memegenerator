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
            //   hideFooter: false,
            //   hideNavBar: true
        }
        // this.viewHanlder = this.viewHanlder.bind(this);
    }

      viewHanlder(event) {
          if(event.location.pathname!="/")
            hashHistory.push("/");
      }

    //   loginViewHandler(hideFooterFlag, hideNavBarFlag, event) {
    //     if ((event.components == undefined)){
    //       this.setState({
    //         hideFooter: hideFooterFlag,
    //         hideNavBar: hideNavBarFlag
    //       });
    //     }
    //   }

    render() {
        return (
            <div>
                <App >
                    <Router history={hashHistory}>
                        <Route path="/" onEnter={this.viewHanlder.bind(this)} component={AsyncMemesGenerator} />

                        {/* <Route path="accessRequest" onEnter={this.viewHanlder.bind(this, true, false)} component={AsyncAccessRequest} />
                        <Route path="profile" onEnter={this.viewHanlder.bind(this, true, false)} component={AsyncProfile} />
                        <Route path="approverMapping" onEnter={this.viewHanlder.bind(this, true, false)} component={AsyncApproverMapping} />
                        <Route path="mappedapprover" onEnter={this.viewHanlder.bind(this, true, false)} component={AsyncMappedApprover} />
                        <Route path="userManagement" onEnter={this.viewHanlder.bind(this, true, false)} component={AsyncUserManagement} />
                        <Route path="approverAccessRequest" onEnter={this.viewHanlder.bind(this, true, false)} component={AsyncApproverAccessRequest} />
                        <Route path="resetPassword" onEnter={this.viewHanlder.bind(this, false, true)} component={AsyncResetPassword} />
                        <Route path="managerBackup" onEnter={this.viewHanlder.bind(this, true, false)} component={AsyncManagerBackup} />
                        <Route path="managerAccessRequest" onEnter={this.viewHanlder.bind(this, true, false)} component={AsyncManagerAccessRequest} />
                        <Route path="userRequest" onEnter={this.viewHanlder.bind(this, true, false)} component={AsyncUserRequest} />
                        <Route path="pendingRequest" onEnter={this.loginViewHandler.bind(this, false, true)} component={AsyncPendingRequest} />
                        <Route path="pendingUserRequest" onEnter={this.loginViewHandler.bind(this, false, true)} component={AsyncPendingUserRequest} />
                        <Route path="applicationOwnerMapping" onEnter={this.viewHanlder.bind(this, true, false)} component={AsyncApplicationOwnerMapping} />
                        <Route path="mappedapplicationOwner" onEnter={this.viewHanlder.bind(this, true, false)} component={AsyncMappedApplicationOwner} />
                        <Route path="unauthorizedUser" onEnter={this.viewHanlder.bind(this, true, false)} component={AsyncUnauthorizedUserPage} /> */}
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
