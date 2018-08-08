import React from 'react';
import IconComponent from '../components/Icon/IconComponent';

export function columnFormatter(field, cell, row, counter, index) {
    switch (field.type) {
        case "text":
            break;

        case "number":
            break;

        case "select":
            break;

        case "time":
            if (cell === null || cell === "" || cell === undefined) {
                cell = "N/A";
                return <span className="time-span" title={field.name}>{field.name} : {cell}</span>
            }
            else {
                //  cell = timeUIFormat(cell);
                return <span className="time-span" title={field.name}>{field.name} : {cell}</span>
            }
            break;

        case "image":
            break;

        case "fixedText":
            if (cell === "" || cell === undefined || cell === null || cell === " ")
                cell = "N/A"
            return <div className="wrapText">{cell}</div>
            break;

        case "toggleText":
            break;

        case "selectText":
            return <div className="view-edit-control">{cell}</div>
            break;

        case "linkText":
            break;

        case "icon":
            if (field.iconTypes == undefined) {
                cell = "N/A";
                return <div>{cell}</div>
            }
            else {
                return <IconComponent icons={field.iconTypes} role={row.roleName} lockDisabled={row.lockStatus ? false : true} requestStatus={row.requestStatus} currentRow={row} onClick={field.handleIconClick} field={field} />
            }
            break;

        default:
            break;


    }
}
