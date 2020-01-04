import React from 'react';

import Header from './Component/Header.js'
import ItemList from './Component/ItemList.js';
import Search from './Component/Search.js';
import NavBar from './Component/Navbar.js';

import UniqueId from 'uniqid';

class App extends React.Component 
{
  constructor()
  {
    super();
    this.state={
      tasks:[
              {
                id:UniqueId(),
                title:"Cook breakFast",
                completed:false
              },
              {
                id:UniqueId(),
                title:"Go to College",
                completed:false
              },
              {
                id:UniqueId(),
                title:"Study in College",
                completed:true
              }
            ],
      view:"all",
      searchKeyWord:""
    }

  }
  render()
  {
    var result='';
    if(this.state.view==="completed")
      result=this.state.tasks.filter(value=>value.completed===true);
    else if(this.state.view==="pending")
      result=this.state.tasks.filter(value=>value.completed===false);
    else
      result=this.state.tasks;


    result=result.filter(value=>value.title.includes(this.state.searchKeyWord));
    
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
        <NavBar view={this.changeView} addTask={this.addNewTask}/>
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
    this.setState({view:toView});
  }
  addNewTask=(task)=>
  {
    var temp={id:UniqueId(),
              title:task,
             completed:false};
    this.setState({tasks:[...this.state.tasks,temp]});
  }
  deleteTask=(id)=>
  {
    var toDelete=this.state.tasks.find(element=>element.id===id);
    
  }
}

export default App;
