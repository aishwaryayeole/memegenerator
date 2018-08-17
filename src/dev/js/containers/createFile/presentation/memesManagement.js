import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, InputGroup, HelpBlock, Col, Row, FormControl, ControlLabel, Grid, Button, Image, Glyphicon, Thumbnail, Collapse, Well, Breadcrumb } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';
import * as table from '../../common/functions/customTable';
import * as types from '../../common/functions/commonActionTypes';
import { getMemeRequest } from '../actions/getMemeActions';
import ViewMeme from './ViewMeme';


class MemesManagement extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            viewImage: false,
            currentRow: 0
        }
        this.handleIconClick = this.handleIconClick.bind(this);

    }

    componentDidMount() {
    }

    componentWillMount() {
        this.props.getMemeRequest();
    }

    componentWillReceiveProps(nextProps) {
        console.log("this.props.getMemesData: ", this.props.getMemesData)
    }

    handleIconClick(iconType, row) {
        if (iconType == 'View') {
            this.setState({
                viewImage: true,
                currentRow: row
            })
        }
    }

    close(modalToBeClosed) {
        if (modalToBeClosed === "viewImage") {
            this.setState({ viewImage: false });
        }
        this.setState({ currentRow: {} });
    }

    render() {


        // function FieldGroup({ id, label, help, }) {
        //     return (
        //         <FormGroup controlId={id}>
        //             <ControlLabel>{label}</ControlLabel>
        //             {help && <HelpBlock>{help}</HelpBlock>}
        //         </FormGroup>
        //     );
        // }

        const fields =
            [{
                name: 'Id',
                dataField: 'id',
                hidden: true
            },
            {
                name: 'Name',
                dataField: 'name',
                //dataFormat: this.dataServerFormatter,
                type: 'fixedText',
                width: '15%'
            },
            {
                name: 'Actions',
                dataField: 'actions',
                dataAlign: 'center',
                width: '10%',
                type: 'icon',
                handleIconClick: this.handleIconClick.bind(this),
                iconTypes: [
                    {
                        iconType: 'pencil',
                        iconTitle: 'View'
                    }
                ],
            }
            ];

        var listCols = fields.map(function (field, index) {
            return (
                <TableHeaderColumn
                    key={index}
                    isKey={field.dataField == 'id' ? true : false}
                    hidden={field.hidden || false}
                    width={field.width}
                    dataAlign={field.dataAlign}
                    dataFormat={field.dataFormat || table.columnFormatter.bind(this, field)}
                    dataField={field.dataField}
                    dataSort={field.dataField == 'actions' ? false : true}
                >
                    {field.name}
                </TableHeaderColumn>
            );
        }.bind(this));

        return (
            <div>
                <Row>
                    <Col sm={12} md={12} xs={12}>
                    </Col>
                </Row>
                <div>
                    <Grid fluid={true}>
                        <Row>
                            <Col sm={12} md={12} xs={12} className="tableBackground">
                                <BootstrapTable ref="table" data={this.props.getMemesData || []}
                                    search={true}
                                    headerStyle={{ color: '#2887DA' }}
                                    pagination
                                >
                                    {listCols}
                                </BootstrapTable>
                            </Col>
                        </Row>
                        <ViewMeme viewImage={this.state.viewImage} close={this.close.bind(this, 'viewImage')} currentRow={this.state.currentRow} id={this.state.currentRow.id} />

                    </Grid>
                </div>

            </div>
        )
    }
}

MemesManagement.contextTypes = {
    router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        getMemesData: state.getMeme.getMemesData

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMemeRequest: getMemeRequest

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MemesManagement);
