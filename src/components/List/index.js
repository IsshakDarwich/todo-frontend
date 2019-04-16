import React, { Component } from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import "./style.css";

library.add(
    faCheck,
    faEdit,
    faTrash    
);

export default class List extends Component{
    state = {
        newTodo: ""
    };

    render(){
        return(
            <div id="list-container">
                <ul>
                    <li>
                        <b>Estudar NodeJs</b>
                        <span>
                            <span title="Check Task"><FontAwesomeIcon icon={faCheck} size="2x" /></span>
                            <span title="Edit Task"><FontAwesomeIcon icon={faEdit} size="2x"/></span>
                            <span title="Delete Task"><FontAwesomeIcon icon={faTrash} size="2x"/></span>
                        </span>
                    </li>
                    <li>
                        <b>Implementar App</b>
                        <span>
                            <span title="Check Task"><FontAwesomeIcon icon={faCheck} size="2x" /></span>
                            <span title="Edit Task"><FontAwesomeIcon icon={faEdit} size="2x"/></span>
                            <span title="Delete Task"><FontAwesomeIcon icon={faTrash} size="2x"/></span>
                        </span>
                    </li>
                    <li>
                        <b>Entregar App</b>
                        <span>
                            <span title="Check Task"><FontAwesomeIcon icon={faCheck} size="2x" /></span>
                            <span title="Edit Task"><FontAwesomeIcon icon={faEdit} size="2x"/></span>
                            <span title="Delete Task"><FontAwesomeIcon icon={faTrash} size="2x"/></span>
                        </span>
                    </li>
                </ul>
            </div>
        );
    };
}