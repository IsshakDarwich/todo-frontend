import React, { Component } from "react";
import api from "../../services/api";

import { distanceInWordsStrict} from "date-fns";
import pt from "date-fns/locale/pt";

import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck,
    faEdit,
    faTrash,
    faSmile,
    faUndo,
    faSpinner
}from '@fortawesome/free-solid-svg-icons';


export default class List extends Component
{
    state = {
        tasks: [],
        newTask: ""
    };

    async loadTasks()
    {
        const response = await api.get('task');
        this.setState({tasks: response.data});
    }

    async componentDidMount()
    {
        this.loadTasks();
    }

    handleInputChange = e =>
    {
        this.setState({newTask: e.target.value});
    };

    handleNewTask = async e => 
    {
        e.preventDefault();//prevents default behavior (opens new tab)

        //axios put / on paths
        let response = await api.post('task', {
            task: this.state.newTask
        });
        //update/concat state
        this.setState({
            tasks: [...this.state.tasks, [response.data,...this.state.tasks]]
        });
    };  
    
    handleEditTask = async e =>
    {
        let idTask = e.currentTarget.dataset.idtask;
        let current_task = e.currentTarget.dataset.task;

        let editedtask = prompt("Editar tarefa", current_task);

        let response = await api.put(`task/${idTask}`, {
            idTask: idTask,
            task: editedtask
        });

        if(response)
            this.loadTasks();
    };
    
    handleCheckTask = async e =>
    {
        let idTask = e.currentTarget.dataset.idtask;
        
        let response = await api.put(`task/${idTask}/check`, {});
        if(response)
            this.loadTasks();
    };

    handleUncheckTask = async e =>
    {
        let idTask = e.currentTarget.dataset.idtask;
        
        let response = await api.put(`task/${idTask}/uncheck`, {});
        if(response)
            this.loadTasks();
    };

    handleDeleteTask = async e =>
    {
        let idTask = e.currentTarget.dataset.idtask;
        
        let response = await api.delete(`task/${idTask}`, {});

        if(response)
            this.loadTasks();
    };

    

    render()
    {
        return(
            <div id="list-container">

                <form onSubmit={this.handleNewTask}>
                    <input 
                        placeholder="Criar Task"
                        value={this.state.newTask}
                        onChange={this.handleInputChange}  
                    />
                    <button type="submit">Criar</button>
                </form>

                <ul>
                    {this.state.tasks.map(task => (
                        <li key={task.idTask}>
                            <span>{task.task}</span>
                            <span>
                                <span className="task-info">
                                    
                                    {task.status ? 
                                        <span>
                                            Feito
                                            <FontAwesomeIcon className="task-status" icon={faSmile}/>
                                        </span>
                                        :
                                        <span>
                                            Quase
                                            <FontAwesomeIcon className="task-status" icon={faSpinner}/>
                                        </span>
                                    }
                                    
                                    <span className="task-info-date">
                                        criada há 
                                        {distanceInWordsStrict(
                                            task.created_at,
                                            new Date(),
                                            {locale: pt} )
                                        }
                                    </span>
                                </span>

                                <span className="task-options">
                                    {task.status ?
                                        <span
                                            onClick={this.handleUncheckTask}
                                            data-idtask={task.idTask}
                                            title="Undo Task">
                                            <FontAwesomeIcon icon={faUndo} size="lg" />                                            
                                        </span>               
                                        :
                                        <span
                                            onClick={this.handleCheckTask}
                                            data-idtask={task.idTask}
                                            title="Check Task">
                                            <FontAwesomeIcon icon={faCheck} size="lg" />
                                            </span>
                                    }
                                    <span
                                        onClick={this.handleEditTask}
                                        data-idtask={task.idTask}
                                        data-task={task.task}
                                        title="Edit Task">
                                        <FontAwesomeIcon icon={faEdit} size="lg"/>
                                    </span>
                                    <span
                                        onClick={this.handleDeleteTask}
                                        data-idtask={task.idTask}
                                        title="Delete Task">
                                        <FontAwesomeIcon icon={faTrash} size="lg"/>
                                    </span>
                                </span>
                            </span>
                        </li>
                    )) }
                </ul>
            </div>
        );
    };
}