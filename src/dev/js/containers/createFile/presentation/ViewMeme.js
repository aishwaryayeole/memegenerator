import React from "react";
import {
  Form,
  FormGroup,
  InputGroup,
  HelpBlock,
  Col,
  Row,
  FormControl,
  ControlLabel,
  Grid,
  ButtonGroup,
  Button,
  Modal
} from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import memeManagementStyle from "./MemeManagementStyles.css";
import { createMemeRequest, resetTarget } from "../actions/getMemeActions";
import * as types from "./../../common/functions/commonActionTypes";
import { ToastContainer, toast } from "react-toastify";

// import { ToastContainer, ToastMessage } from "react-toastr";
// const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class ViewMeme extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      modalHeading: "Meme",
      createData: {
        id: "",
        text0: "",
        text1: ""
      },
      errors: {
        id: "",
        text0: "",
        text1: ""
      }
    };
  }

  close() {
    this.setState({ createData: [] });
    this.props.close();
  }

  componentWillReceiveProps(nextProps) {
    switch (nextProps.target) {
      case types.CREATE_MEME_RESPONSE:
        console.log("image url:", nextProps.imageURL);
        toast.success("your meme created successfully!", {
          position: toast.POSITION.TOP_CENTER
        });
        this.props.resetTarget();
        var win = window.open(nextProps.imageURL, "_blank");
        win.focus();

        break;
    }
  }

  createMeme = () => {
    let createData = this.state.createData;
    createData["id"] = this.props.currentRow.id;
    this.props.createMemeRequest(createData);
    this.close();
  };

  //Function to handle change in Requester, Category, Title, Priority, Billing dispute etc Fields
  handleChange = (type, e) => {
    if (e) {
      var createData = this.state.createData;
      var errors = this.state.errors;
      createData[type] = e.target.value;
      errors[type] = "";
      this.setState({ createData, errors });
    }
  };
  render() {
    return (
      <div>
        <Modal
          show={this.props.viewImage}
          onHide={this.close.bind(this)}
          bsSize="medium"
        >
          <Modal.Header closeButton>
            <Modal.Title className="modalHeader">
              {this.props.currentRow.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className={memeManagementStyle.modalScroll}>
            <Grid fluid={true} className={memeManagementStyle.modal}>
              <Row className="show-grid">
                <Col md={3} />
                <Col md={6}>
                  <FormGroup>
                    <img
                      src={this.props.currentRow.url}
                      height="300"
                      width="300"
                    />
                  </FormGroup>
                </Col>
                <Col md={3} />
              </Row>
              <Row className="show-grid top-buffer">
                <Col md={3} />

                <Col componentClass={ControlLabel} md={2}>
                  Text 1 :
                </Col>
                <Col md={5}>
                  <FormGroup>
                    <FormControl
                      type="text"
                      name="text0"
                      value={this.state.createData.text0}
                      onChange={this.handleChange.bind(this, "text0")}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col md={3} />

                <Col componentClass={ControlLabel} md={2}>
                  Text 2 :
                </Col>
                <Col md={5}>
                  <FormGroup>
                    <FormControl
                      type="text"
                      name="text1"
                      value={this.state.createData.text1}
                      onChange={this.handleChange.bind(this, "text1")}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col md={3} />

                <Col md={6}>
                  <Button
                    bsStyle="default"
                    className="pull-right"
                    onClick={this.createMeme}
                  >
                    Create
                  </Button>
                </Col>
              </Row>
            </Grid>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-default" onClick={this.close.bind(this)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* <ToastContainer
          toastMessageFactory={ToastMessageFactory}
          ref="container"
          className="toast-top-right"
        /> */}
      </div>
    );
  }
}

ViewMeme.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    imageURL: state.getMeme.imageURL || "",
    error: state.getMeme.error,
    target: state.getMeme.target
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      createMemeRequest: createMemeRequest,
      resetTarget: resetTarget
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewMeme);
