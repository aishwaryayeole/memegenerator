import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, InputGroup, HelpBlock, Col, Row, FormControl, ControlLabel, Grid, Button, Image, Glyphicon, Thumbnail, Collapse, Well, Breadcrumb } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';
import * as table from '../../common/functions/customTable';
// import profileStyle from './ProfileStyles.css';
// import { handleActiveNav, getRolesListRequest, getBackupManagersListRequest, toggleNavBar } from 'common/functions/commonActions';
import * as types from '../../common/functions/commonActionTypes';
import { getMemeRequest } from '../actions/getMemeActions';


class memesManagement extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
    }

    componentWillMount() {

    }

    componentWillReceiveProps(nextProps) {

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
            iconType: 'eye-open',
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
                        Meme Lord
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
                      

                    </Grid>
                </div>
            </div>
        )
    }
}

memesManagement.contextTypes = {
    router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        getMemesData: state.geteMeme.getMemesData

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMemeRequest: getMemeRequest

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(memesManagement);
