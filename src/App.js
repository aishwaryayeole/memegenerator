// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './dev/js/containers/common/components/Header/Header'
// import '../scss/index.css';
import MemesManagement from './dev/js/containers/createFile/presentation/MemesManagement';
// import { Col, Row, Grid } from 'react-bootstrap';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {

    return (
      <div>
        <div>
          <Header className="header" />
          <MemesManagement />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

