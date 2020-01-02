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
        <div className='container-fluid' onClick={this.changeState}>
            <input type='checkbox' onChange={this.changeState} checked={this.state.completed}/>
            <h3>{this.state.completed?<del>{this.state.title}</del>:this.state.title}</h3>
        </div>
        );
    }
    changeState=()=>
    {
        this.setState({completed:!this.state.completed});
    }
}
export default TODOItem;