import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

class App extends Component{
  
  constructor(){
    super();
    this.state = {
      task : [],
      counter : []
    }

  }

  addTask = (task) => {
    this.setState({task : [...this.state.task, task]});
    this.setState({counter : [...this.state.counter, {id : (this.state.task.length), value : 0}]});
  }

  editTask = (prev, value) => {
    let array = this.state.task;
    const index = array.indexOf(prev);
    array[index] = value;
    this.setState({task : array});
  }

  deleteTask = (index) => {
    const v = this.state.task.filter((c => {
      const indexe = this.state.task.indexOf(c);
      return indexe !== index;
    }
    ));
    const d = this.state.counter.filter((c => {
      const indexe = this.state.counter.indexOf(c);
      return indexe !== index;
    }
      ));
    this.setState({task : v, counter : d})
  } 

  doIncrement =  counter => {
    const array = [...this.state.counter];
    const index = array.indexOf(counter);
    array[index].value++;
    this.setState({array})
  }

  doDecrement = counter => {
    const array = [...this.state.counter];
    const index = array.indexOf(counter);
    array[index].value--;
    this.setState({array})
  }

  resetAll = () => {
    const array = [...this.state.counter];
    for (var i in array) {
      array[i].value = 0;
    }
    console.log(array);
    this.setState({counter : array});
  }

  render() {
    return (
      <div>
          <Header addTask = {this.addTask} resetAll = {this.resetAll}/>
          <div>
            {this.state.task.map((current, index) => 
              <Body key={index} tasks = {current} counter = {this.state.counter[index]} editTask = {this.editTask} deleteTask = {this.deleteTask} increment = {this.doIncrement} decrement = {this.doDecrement} index = {index}/>)}
          </div>
      </div>
    );
  }
  i = 0;
}

export default App;
