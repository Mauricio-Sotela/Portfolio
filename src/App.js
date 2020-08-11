import React, { Component } from "react";
import Button from "./components/Button";
import Data from "./data.json";
import Skill from "./components/Skils";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Mauricio",
      tasks: [],
      showCompleted: true,
    };
  }

  updateTaskInputValue = (e) => {
    this.setState({ newTaskItem: e.target.value });
  };

  toggleTask = (task) =>
    this.setState({
      tasks: this.state.tasks.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      ),
    });

  createNewTask = (task) => {
    if (!this.state.tasks.find((t) => t.name === task)) {
      this.setState(
        {
          tasks: [...this.state.tasks, { name: task, done: false }],
        }
        // () => localStorage.setItem("tasks", JSON.stringify(this.state))
      );
    }
  };
 

  render = () => (
    
    <div>
      
      <Button 
        title="mauricio"
        bgColor="white"
        hoverColor="black"
        textColor="black"
        to="https://github.com/Mauricio-Sotela"
      />

      <Skill data={Data}/>
    </div>
  );
}
