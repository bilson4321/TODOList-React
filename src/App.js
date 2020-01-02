import React from 'react';

import Header from './Component/Header.js'
import ItemList from './Component/ItemList.js';
import Search from './Component/Search.js';

class App extends React.Component 
{
  constructor()
  {
    super();
    this.state={
      tasks:[
              {
                title:"Cook breakFast",
                completed:false
              },
              {
                title:"Go to College",
                completed:false
              },
              {
                title:"Study in College",
                completed:false
              }
            ],
      searchKeyWord:''
    }
  }
  render()
  {
    const result=this.state.tasks;
    if(this.state.searchKeyWord==null)
    {
      console.log("empty");
    }
    else
    {
      console.log(this.state.searchKeyWord);
    }
    return (
      <React.Fragment>
        <Header />
        <Search changeSearchKeyWord={this.changeSearchQuery}/>
        <ItemList todoTask={result} />
      </React.Fragment>
    );
  }
  changeSearchQuery=(keyword)=>
  {
    this.setState({searchKeyWord:keyword});
    console.log(this.state.searchKeyWord);
  }
}

export default App;
