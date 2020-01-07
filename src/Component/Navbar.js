import React from 'react';

class NavBar extends React.Component
{
    constructor()
    {
        super();
        this.state={
            showForm:false,
            taskInput:""
        };
    }
    render()
    {
        return(
            <React.Fragment>
                <div className='container mb-4'>
                <div className="btn-group">
                    <button type="button" className="btn btn-secondary" onClick={(e)=>this.buttonClick("all")}>All</button>
                    <button type="button" className="btn btn-secondary" onClick={(e)=>this.buttonClick("completed")}>
                        Completed
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={(e)=>this.buttonClick("pending")}>Not Completed</button>
                </div>
                <button type="button" className="btn btn-primary float-right">
                    Add Task
                </button>
            </div>
            <div className="container mb-2">
                <form>
                <div className='input-group'>
                    <label htmlFor='task'>Task : </label>
                    <input id='task' className='form-control' value={this.state.taskInput} type='text' placeholder="Task" onChange={this.handleTaskInput}></input>
                    <div className="input-group-append">
                        <button className="btn btn-success" type="submit" onClick={this.addTask}>Add</button>  
                    </div>
                </div>
                </form>
            </div>
            </React.Fragment> 
        );
    }
    buttonClick=(text)=>
    {
        this.props.view(text);
    }
    handleTaskInput=(e)=>
    {
        if(e.target.value==13)
        {

        }
        else
        this.setState({taskInput:e.target.value});   
    }
    addTask=(e)=>
    {
        e.preventDefault();
        this.setState({taskInput:""});
        if(this.state.taskInput!=="")
        this.props.addTask(this.state.taskInput);
    }
}
export default NavBar;