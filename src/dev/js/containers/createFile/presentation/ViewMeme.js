import React from 'react';
import { Form, FormGroup, InputGroup, HelpBlock, Col, Row, FormControl, ControlLabel, Grid, ButtonGroup, Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import memeManagementStyle from './MemeManagementStyles.css';
import { getMemeRequest } from '../actions/getMemeActions';

class ViewMeme extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            modalHeading: 'View Meme'
        }

    }

    close() {
        this.props.close();
    }





    componentWillReceiveProps(nextProps) {
        // if (nextProps.currentRow) {
        //     let requestList = [nextProps.currentRow];
        //     if (this.approverList.length == 0) {
        //         requestList.map((approver) => {
        //             this.approverList.push({ tableId: 1, firstName: approver.level1ApproverFirstName, lastName: approver.level1ApproverLastName,emailId:approver.level1ApproverEmailId, approveAs: approver.level1ApproverAs=="null"?"N/A":approver.level1ApproverAs,comment:approver.level1ApprovalComments=="null"?"N/A":approver.level1ApprovalComments,approveDate:approver.level1requestApprovedDate=="null"?"N/A":approver.level1requestApprovedDate, status: approver.level1ApprovalStatus })
        //         })
        //         requestList.map((approver) => {
        //             this.approverList.push({ tableId: 2, firstName: approver.level2ApproverFirstName, lastName: approver.level2ApproverLastName,emailId:approver.level2ApproverEmailId, approveAs: approver.level2ApproverAs=="null"?"N/A":approver.level2ApproverAs,comment:approver.level2ApprovalComments=="null"?"N/A":approver.level2ApprovalComments,approveDate:approver.level2requestApprovedDate=="null"?"N/A":approver.level2requestApprovedDate, status: approver.level2ApprovalStatus })
        //         })
        //     } else {
        //         this.approverList = [];
        //     }
        //     if (nextProps.currentRow.requestId != this.props.currentRow.requestId) {
        //         if (this.dataServerArray.length == 0) {
        //             this.dataServerArray = nextProps.currentRow.dataServer.split(";");
        //         } else {
        //             this.dataServerArray = [];
        //         }
        //         //this.props.getRequestApproverDetailsRequests(nextProps.currentRow.requestId)
        //     }
        // }
    }


    render() {

       

        return (
            <Modal show={this.props.viewRequest} onHide={this.close.bind(this)} bsSize="large">
                <Modal.Header closeButton>
                    <Modal.Title className="modalHeader">{this.state.modalHeading}</Modal.Title>
                </Modal.Header>
                <Modal.Body className={memeManagementStyle.modalScroll}>
                    <Grid fluid={true} className={memeManagementStyle.modal}>
                        <Row>
                        <img src ={this.props.currentRow.url} />
                        </Row>
                    </Grid>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn btn-default' onClick={this.close.bind(this)}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

ViewMeme.contextTypes = {
    router: React.PropTypes.object.isRequired
};


function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewMeme);