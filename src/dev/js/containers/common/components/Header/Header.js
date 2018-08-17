import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Col, Row, Button, Collapse, Grid, Glyphicon,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'react-bootstrap';
import { hashHistory } from 'react-router';
import headerStyle from '../Header/HeaderStyles.css';

var memeImg = require("../../../../../images/meme-icon.jpg");

class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            //   username: sessionStorage.getItem('username'),
            //   about: false,
        };
        // this.onLogoutClick = this.onLogoutClick.bind(this);
        // this.onAboutClick = this.onAboutClick.bind(this);
    }

    //   onLogoutClick(iconType, row) {
    //     sessionStorage.removeItem('token');
    //     sessionStorage.removeItem('refresh_token');
    //     sessionStorage.removeItem('userId');
    //     sessionStorage.removeItem('role');
    //     sessionStorage.removeItem('username');
    //     sessionStorage.removeItem('userFname');
    //     sessionStorage.removeItem('userLname');
    //     sessionStorage.removeItem('bdTrustId');
    //     //sessionStorage.removeItem('firstLogginFlag');
    //     hashHistory.push('/');
    //   }
    //   close() {
    //     this.setState({ about: false });
    //   }
    //   onAboutClick() {
    //     this.setState({ about: true })
    //   }
    render() {
        // let isLoggedIn = sessionStorage.getItem("token") != undefined &&
        //   sessionStorage.getItem("token") != null &&
        //   sessionStorage.getItem("token") != "" ? true : false;

        const navInstance = (
              <div>
                <Grid fluid={true}>
                  <Row className={headerStyle.header_css}>
                    <Col xs={2} md={4} sm={4}>
                      <div className={headerStyle.sap_img_div}>
                        <Button className="menuButton" >
                          <Glyphicon glyph="menu-hamburger" className="glyphIcon" />
                        </Button>
                        <img style={{ marginLeft: '15px', marginTop: '5.5px' }} src={memeImg} height='42' width="42" />
                      </div>
                    </Col>

                    <Col xs={10} md={4} sm={4} className={headerStyle.header_heading}>
                      Meme Generator
                  </Col>

                    <Col xs={2} md={4} sm={4} className={headerStyle.header_links_position}>
                      <span>
                        Welcome !
                      </span>
                      <span className={headerStyle.header_links_padding}>
                        <span className={headerStyle.header_links}>About</span>
                    </span>

                    </Col>

                  </Row>
                </Grid>
                {/* <Row>
                  <About about={this.state.about} close={this.close.bind(this)} />
                </Row> */}
              </div>

     
            // <Row>
            //     <Navbar inverse collapseOnSelect>
            //         <Col md={3}>
            //             <Navbar.Brand>
            //                 <img src={memeImg} height='10%' width="60"/>
            //             </Navbar.Brand>
            //         </Col>
            //         <Col md={9}>
            //             <Navbar.Collapse>
            //                 <Navbar.Header >
            //                 </Navbar.Header>
            //                 <Nav pullRight>
            //                     <NavItem eventKey={1} href="#">
            //                         About Page
            //                 </NavItem>
            //                 </Nav>
            //             </Navbar.Collapse>
            //         </Col>
            //     </Navbar>
            // </Row>
        );

        return (
            <header >
                {navInstance}
            </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
