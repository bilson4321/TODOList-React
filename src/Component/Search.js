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
            <form>
                <input type='text' onChange={this.changeSearchQuery}></input>
            </form>
        );
    }
    changeSearchQuery=(event)=>
    {
        this.props.changeSearchKeyWord(event.target.value);
        this.setState({searchQuery:event.target.value});
    }
}
export default Search;