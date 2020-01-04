import React from 'react';

class TODOItem extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            id:this.props.item.id,
            title:this.props.item.title,
            completed:this.props.item.completed
        }
    }
    render()
    {
        return(
            <div className='custom-control custom-checkbox mb-1' onClick={this.changeState}>
                <input className='custom-control-input' type='checkbox' onChange={()=>this.changeState()} checked={this.state.completed}/>
                <label className='custom-control-label'>{this.state.completed?<del>{this.state.title}</del>:this.state.title}</label>
                <button className='float-right' onClick={()=>this.deleteTask(this.state.id)}>X</button>
            </div>
        );
    }
    changeState=()=>
    {
        this.setState({completed:!this.state.completed});
        this.props.changeTaskState(this.state.id);
    }
    deleteTask=(id)=>
    {
        this.props.deleteTask(id);
        
    }
}
export default TODOItem;