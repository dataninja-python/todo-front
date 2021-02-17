// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';

const todoItems = [
  {
    id: 1,
    title: "Present",
    description: "Lorem ipsum",
    completed: false
  },
  {
    id: 2,
    title: "Prepare presentation",
    description: "Lorem ipsum",
    completed: true
  },
  {
    id: 3,
    title: "graduate",
    description: "Lorem ipsum",
    completed: false
  },
  {
    id: 4,
    title: "Complete forms",
    description: "Lorem ipsum",
    completed: false
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      todoList: todoItems
    };
  }
  displayCompleted = (status) => {
    if(status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };
  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <span onClick={() => this.displayCompleted(true)} className={this.state.viewCompleted ? "active" : ""}>
          complete
        </span>
        <span onClick={() => this.displayCompleted(false)} className={this.state.viewCompleted ? "" : "active"}>
          Incomplete
        </span>
      </div>
    );
  };
  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.todoList.filter(
      // may need to change to double equal sign below if code fails to work
      item => item.completed === viewCompleted
    );
    return newItems.map(item => (
      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
        <span className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""}`} title={item.description}>
          {item.title}
        </span>
      </li>
    ));
  };
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default App;