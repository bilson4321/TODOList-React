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
                    <ul className='list-group'>
                    {this.props.todoTask.map((item,index)=>
                        {
                            return(<li className='list-group-item' key={item.id}>
                             <TODOItem item={item} />
                            </li>)
                        })}
                    </ul>
                </div>  
            </article>
        );
    }
}
export default ItemList;