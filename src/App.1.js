import React, { Component } from 'react';
import './App.css';

// let tasks = [
//   {
//     id:1,
//     desc:'Hacer Home',
//   },
//   {
//     id:2,
//     desc:'Hacer Transferencias Programadas',
//   },
// ];
class App extends Component {
  state = {
    task:'',
    tasks: [
      {
        id:1,
        desc:'Hacer Home',
      },
      {
        id:2,
        desc:'Hacer Transferencias Programadas',
      },
    ]
  }
  constructor() {
    super();
    this.onTaskChangeHandle3 = this.onTaskChangeHandle3.bind(this);
    this.onAddHandler = this.onAddHandler.bind(this);
    this.onDeleleHandler = this.onDeleleHandler.bind(this);
  }
  onTaskChangeHandle = (e) => {
    console.log(e.target.value);
    this.setState({task: e.target.value});
  }

  onTaskChangeHandle2(e) {
    console.log(e.target.value);
    this.setState({task: e.target.value});
  }

  onTaskChangeHandle3(e) {
    console.log(e.target.value);
    this.setState({task: e.target.value});
  }

  onAddHandler() {
    const newState = [...this.state.tasks]
    const nextId = newState.length + 1;
    newState.push({id:nextId, desc:this.state.task});
    this.setState({tasks: newState});
    console.log(this.state.tasks);
  }

  onDeleleHandler(index) {
    let newState = [...this.state.tasks];
    newState.splice(index, 1);
    this.setState({tasks: newState});
  }

  render() {
    return (
      <div className="App">
         <div className="Todo">
            <div className="Todoinput">
              <input type="text" onChange={this.onTaskChangeHandle3}></input>
              <button onClick={this.onAddHandler}>ADD</button>
            </div>
            <div className="Todoinput">
              {this.state.task}
            </div>
            <div>
            <ul>
              {
                this.state.tasks.map((item, index)=>{
                  return <li key={item.id}>{item.desc}
                  <button onClick={()=>this.onDeleleHandler(index)}>delete</button></li>;
                })
              }
              <li>todo 1 <button>delete</button></li>
              <li>todo 1 <button>delete</button></li>
              <li>todo 1 <button>delete</button></li>
              <li>todo 1 <button>delete</button></li>
            </ul>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
