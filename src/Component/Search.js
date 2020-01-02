import React from 'react';

class Search extends React.Component
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
                <div className='input-group'>
                    <input className='form-control' type='text' placeholder="Search tasks....." onChange={this.changeSearchQuery}></input>
                    <div className="input-group-append">
                        <button className="btn btn-success" type="submit">Search</button>  
                    </div>
                </div>
            </div>
        );
    }
    changeSearchQuery=(event)=>
    {
        this.props.changeSearchKeyWord(event.target.value);
        this.setState({searchQuery:event.target.value});
    }
}
export default Search;