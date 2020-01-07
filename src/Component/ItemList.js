import React from 'react';
import TODOItem from './TODOItem.js';

class ItemList extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <article>
                <div className='container'>
                {
                (this.props.todoTask.length!==0)?
                
                    <ul className='list-group'>
                    {this.props.todoTask.map((item)=>
                        {
                            return(<li className='list-group-item' key={item.id}>
                             <TODOItem item={item} changeTaskState={this.props.changeTaskState} deleteTask={this.props.deleteTask} />
                            </li>)
                        })}
                    </ul>
                :
                <h1>No item Found</h1>
                }
                </div>  
            </article>
        );
    }
}
export default ItemList;