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
                <ul>
                {this.props.todoTask.map((item,index)=>{return <li key={index}><TODOItem item={item} /></li>})}
                </ul>
                
            </article>
        );
    }
}
export default ItemList;