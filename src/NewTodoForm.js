import React, { Component } from 'react';
import uuid from 'uuid/dist/v4';
import './NewTodoForm.css'


class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createTodos({...this.state, id: uuid(), completed: false});
        this.setState({
            task: ""
        });

    }
    render() {

        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor='task'>New Todo: </label>
                <input 
                type="text"
                id="task"
                placeholder="New Todo"
                name="task"
                value={this.state.task}
                onChange={this.handleChange}
                />
                <button>Enter</button>

            </form>

        )
    }


}


export default NewTodoForm;