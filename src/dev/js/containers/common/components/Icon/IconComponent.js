import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

export default class IconComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onIconClick = this.onIconClick.bind(this);
  }

  onIconClick(event) {
    this.props.onClick(event.target.title, this.props.currentRow);
  }

  render() {
    const icons = this.props.icons;
    var renderIcons = icons.map(function (eachIcon, index) {
      return (
        <Button
          title={eachIcon.iconTitle}
          // disabled={
          //   (eachIcon.iconType == 'eye-open' ? false : (this.props.role == "Administrator"&&(eachIcon.iconType == 'pencil'||eachIcon.iconType=='lock_status')&&this.props.currentRow.emailId==sessionStorage.getItem("username")) ? true : false) ||
          //   (eachIcon.iconType == 'remove-circle' ?this.props.currentRow.level1ApprovalStatus == 'P' && this.props.currentRow.level2ApprovalStatus=="null" ? false : true : false) ||
          //   (eachIcon.iconType == 'trash' && this.props.currentRow.emailId == sessionStorage.getItem("username") ? true : false)||
          //   (eachIcon.iconType == 'pencil' && this.props.currentRow.activeStatus == "N" ? true : false)
          // }
          onClick={this.onIconClick.bind(this)}
          key={index}
        >
          {eachIcon.iconType == 'lock_status' &&
            <i className='lockStatusImgStyle'></i>
          }
          {eachIcon.iconFamily == 'Google' &&
            <i className={eachIcon.iconType}>{eachIcon.iconName}</i>
          }
          {eachIcon.iconFamily != 'Google' &&
            <Glyphicon glyph={eachIcon.iconType} title={eachIcon.iconTitle} style={eachIcon.iconType == 'eye-open' ? { color: 'rgb(40, 135, 218)' } : (this.props.role == "Administrator" && (eachIcon.iconType == 'pencil'||eachIcon.iconType=='lock_status')&&this.props.currentRow.emailId==sessionStorage.getItem("username")) || (eachIcon.iconType == 'remove-circle' && this.props.currentRow.level1ApprovalStatus != 'P' ) ||(eachIcon.iconType == 'pencil' && this.props.currentRow.activeStatus == "N")|| (eachIcon.iconType == 'trash' && this.props.currentRow.emailId == sessionStorage.getItem("username")) ? { color: 'rgba(0,0,0,0.4)' } : { color: 'rgb(40, 135, 218)' }} />
          }
        </Button>
      );
    }.bind(this));

    return (
      <div>
        {renderIcons}
      </div>
    );
  }
}
