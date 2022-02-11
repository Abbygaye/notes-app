import React, { Component } from 'react';
import Task from './Task'

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            tasks: []
        };  
        this.handleTaskChange = this.handleTaskChange.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleTaskChange(e)
    {
        this.setState({item: e.target.value});
    }

    handleAddTask()
    {
        if(this.state.item.trim()) {
            this.setState(prev => ({
                tasks: [...prev.tasks, this.state.item]}));
        }
        this.setState({item: ''});
    }

    render() { 
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-10">
                        <input type="text" 
                        value={this.state.item} 
                        id="note" 
                        className="input-text" 
                        onChange={this.handleTaskChange}
                        placeholder="Enter Task"
                        autoFocus /> 
                    </div>
                    <div className="col-2">
                        <button className="btn secondary-color text-white" onClick={this.handleAddTask}>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>            
                <div className="row mt-3 text-left">
                    <Task tasks={this.state.tasks} />
                </div>
            </React.Fragment>
          );
    }
}
 
export default Input;