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
                id:2,
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
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
    this.setState({tasks:myJson});
  });
  
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
        <ItemList todoTask={result} changeTaskState={this.changeTaskState} deleteTask={this.deleteTask} />
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
  changeTaskState=(id)=>
  {
    var toChange=this.state.tasks.find(element=>element.id===id);
    var temp=this.state.tasks.filter(element=>{
                                                
                                                if(element===toChange)
                                                  element.completed=!element.completed;
                                                
                                                 return element; 
                                                });
    this.setState({tasks:temp});
  }
  deleteTask=(id)=>
  {
    var toDelete=this.state.tasks.find(element=>element.id===id);
    var temp=this.state.tasks.filter(element=>element!==toDelete);
    this.setState({tasks:temp});
  }
}

export default App;
