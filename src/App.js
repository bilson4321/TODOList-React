import React from 'react';

import Header from './Component/Header.js'
import ItemList from './Component/ItemList.js';
import Search from './Component/Search.js';
import NavBar from './Component/Navbar.js';

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
      view:"all",
      searchKeyWord:""
    }
  }
  render()
  {
    var result=this.state.tasks.filter(value=>value.title.includes(this.state.searchKeyWord));
    // // if(this.state.searchKeyWord!=="")
    // // {
    // //   console.log(this.state.searchKeyWord);
    // //   result=this.state.tasks.filter(value=>value.title.includes(this.state.searchKeyWord));
    // // }
    // else
    // {
    //   result=this.state.tasks;
    // }
    return (
      <React.Fragment>
        <Header />
        <NavBar />
        <Search changeSearchKeyWord={this.changeSearchQuery}/>
        <ItemList todoTask={result} />
      </React.Fragment>
    );
  }
  changeSearchQuery=(keyword)=>
  {
    this.setState({searchKeyWord:keyword});
  }
  changeView=(toView)=>
  {
    this.setState({view:toView})
  }
}

export default App;
