import React, { useEffect, useState } from "react";
import nextId from "react-id-generator";
import { Row, Card, Button } from "react-bootstrap";
import TaskCard from "../components/globals/task";

const tasks = [
  { id: "id1", value: "Hello", is_completed: false },
  {
    id: "id4",
    value: "Hello",
    is_completed: false,
  },
];
export default function ToDO() {
  const [task, setTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);
  // const taskList = [];
const [taskList, setTaskList] = useState([]);

  useEffect(() => {
      let complete_task = tasks.filter((task)=>{
        return task.is_completed === true
      })
      let incomplete_task = tasks.filter((task)=>{
        return task.is_completed === false
      })
      // console.log('incompleteTask', incomplete_task, typeof incomplete_task)
      // taskList.push(incomplete_task);
      setTaskList(incomplete_task)
      setCompletedTasks(complete_task)
  }, []);
  
  const handleChange = (e) => {
    const value = e.target.value;
    setTask(value);
  };
  
  const addTask = () => {
    console.log(task);
    //adding task to the db and showing it in the UI
    const toDo = {
      id: nextId(),
      value: task,
      is_completed: false,
    };
    console.log(toDo);
    tasks.push(toDo);
  };

  const handleTask = (value) =>{
    console.log('value', value)
    
    taskList.map((task)=>{
      if(task.id == value){
        task.is_completed = true;
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
              onChange={handleChange}
              />
            <Button className="margin-10" type="submit" onClick={addTask}>
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
          {console.log(taskList, typeof taskList)}
          {taskList && taskList.length > 0? (
            taskList.map((task) => <TaskCard  task={task} handleTask={handleTask} /> )
            ) : (
            <div> No More tasks left to do 😀 </div>
          )}
        </div>
        <div
          className="flex"
          style={{ backgroundColor: "#fff", marginTop: "10px", width: "100%" }}
        >
          <h2>Completed Tasks</h2>
          <TaskCard />
        </div>
      </Row>
    </div>
  );
}
