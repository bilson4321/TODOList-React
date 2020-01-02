import React from 'react';

class TODOItem extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            title:this.props.item.title,
            completed:this.props.item.completed
        }
    }
    render()
    {
        return(
            <div className='custom-control custom-checkbox mb-3' onClick={this.changeState}>
                <input className='custom-control-input' type='checkbox' onChange={this.changeState} checked={this.state.completed}/>
                <label className='custom-control-label'>{this.state.completed?<del>{this.state.title}</del>:this.state.title}</label>
            </div>
        );
    }
    changeState=()=>
    {
        this.setState({completed:!this.state.completed});
    }
}
export default TODOItem;