import React from "react";
import "./App.css"
import AddNewTask from "./components/AddNewTask"

class App extends React.Component {
  render() {
    return <div className="main__container">
      <div className="add__container">
        <div className="add__header">
          <div className="add__header-back">arrow</div>
          <h1 className="add__header-title">Add New Task</h1>
        </div>
        <div>
          <div className="add__task">
            <label for="task">Task Name</label>
            <input name="task" type="text"/>
          </div>
          <div className="add__priority">
            <label for="priority">Select Priority Level</label>
            <div className="add__priority-radio-wrapper">
              <input name="priority" type="radio"/>
              <input name="priority" type="radio"/>
              <input name="priority" type="radio"/>
              <input name="priority" type="radio"/>
              <input name="priority" type="radio"/>
              <input name="priority" type="radio"/>
              <input name="priority" type="radio"/>
              <input name="priority" type="radio"/>
              <input name="priority" type="radio"/>
              <input name="priority" type="radio"/>
            </div>
          </div>
          <div className="add__complexity">
            <label for="complexity">Select Complexity Level</label>
            <div className="add__complexity-radio-wrapper">
              <input name="complexity" type="radio"/>
              <input name="complexity" type="radio"/>
              <input name="complexity" type="radio"/>
              <input name="complexity" type="radio"/>
              <input name="complexity" type="radio"/>
              <input name="complexity" type="radio"/>
              <input name="complexity" type="radio"/>
              <input name="complexity" type="radio"/>
              <input name="complexity" type="radio"/>
              <input name="complexity" type="radio"/>
            </div>
          </div>
          <div className="add__date-time">
            <div className="add__date-wrapper">
              <label for="date">Select Due Date</label>
              <input name="date" type="date"/>
            </div>
            <div className="add__time-wrapper">
              <label for="time">Select Time</label>
              <input name="time" type="time"/>
            </div>
          </div>
          <div className="add__list">
            <label for="list">Add Checklist for subtasks</label>
            <input name="list" type="text"/>
            <div className="add__list--display-list">
              <ul>
                <li>test1</li>
                <li>test2</li>
              </ul>
            </div>
          </div>
          <div className="add__tags">
            <label for="tags">Add Tags</label>
            <input name="tags" type="text"/>
          </div>
          <div className="add__button-wrapper">
            <button className="add__button">Save Task</button>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default App;
