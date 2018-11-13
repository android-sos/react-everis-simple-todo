import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    desc:'',
    tasks:[],
  }

  onChangeHandler (e) {
    console.log(e.target.value);
  }

  onChangeHandler2 = (e) => {
    console.log(e.target.value);
    this.setState({desc:e.target.value});
  }

  onAddTask = () => {
    const newState = [...this.state.tasks];
    const nextId = newState.length + 1;
    const newElem = {id: nextId, desc: this.state.desc}
    newState.push(newElem);
    this.setState({tasks: newState})
  }

  onDeleteHandler (index) {
   
    this.state.tasks.splice(index,1);

    this.setState({...this.state});
  }
  
  render() {
    return (
      <div className="App">
      
        <div className="Todo">
        <div className="Todoinput">
              <input type="text" onChange={this.onChangeHandler2}></input>
              
              <button onClick={this.onAddTask}>ADD</button>
            </div>
        <div>
        {this.state.desc}
        </div>
        <ul>
          {
            this.state.tasks.map((task, index)=>{
              return <li key={task.id}>
               {task.desc}
               <button onClick={() => this.onDeleteHandler(index)}>delete</button>
              </li>
            })
          }
        </ul>
        </div>
      </div>
    );
  }
}

export default App;
