import React from 'react';

class NavBar extends React.Component
{
    constructor()
    {
        super();
        this.state={
            searchQuery:''
        };
    }
    render()
    {
        return(
            <div className='container mb-4'>
                <div className="btn-group">
                    <button type="button" className="btn btn-secondary">All</button>
                    <button type="button" className="btn btn-secondary">Completed</button>
                    <button type="button" className="btn btn-secondary">Not Completed</button>
                </div>
                <button type="button" className="btn btn-primary float-right">
                    Add Task
                </button>
                
  
            </div>
        );
    }
    
}
export default NavBar;