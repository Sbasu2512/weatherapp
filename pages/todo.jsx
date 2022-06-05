import React, { useEffect, useState } from "react";
import nextId from "react-id-generator";
import { Row, Card, Button } from "react-bootstrap";
import TaskCard from "../components/globals/task";

const tasksDb = [
  
];
export default function ToDO() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(tasksDb);
  const [completedTasks, setCompletedTasks] = useState([]);
const [taskList, setTaskList] = useState([]);

const resetTask = () => {
  setTask('')
}
  
const handleChange = (e) => {
    const value =  e.target.value;
    setTask(value);
  };
  
  const addTask = (e) => {
    e.preventDefault();
    const toDo = {
      id: nextId(),
      value: task,
      is_completed: false,
    };
    setTasks(prev => [...prev, toDo])
    resetTask();
  };
  
  const handleTask = (value) =>{
    tasks.map((task)=>{
      if(task.id == value){
        return {...task, is_completed:true}
      }
    })
  }
  
  
  
  return (
    <div className="section flex" style={{ width: "60%", margin: "150px" }}>
      <Row className="w-100">
        <Card className="w-100" style={{ alignItems: "center" }}>
          <Card.Title className="text-center bold font-50">To Do's</Card.Title>
          <Card.Body>
            <input
              type="textbox"
              className="padding-5"
              placeholder="Enter a task to add "
              onChange={handleChange}
              />
            <Button className="margin-10 basic font-20" type="submit" onClick={addTask}>
              Add
            </Button>
          </Card.Body>
        </Card>
      </Row>
      <Row className="w-100">
        <div
          className="flex"
          style={{ backgroundColor: "#fff", marginTop: "10px", width: "100%" }}
          >
          <h2>Tasks</h2>

          {tasks && tasks.length > 0? (
            tasks.map((task) => <TaskCard  task={task} handleTask={handleTask} /> )
            ) : (
            <div className="basic font-30"> No More tasks left to do 😀 </div>
          )}
        </div>
        
      </Row>
    </div>
  );
}
