import React, { useEffect, useState } from "react";
import nextId from "react-id-generator";
import { Row, Card, Button } from "react-bootstrap";
import TaskCard from "../components/globals/task";

const tasksDb = [
  { id: "id1",
   value: "Buy a laptop",
  is_completed: false },
  {
    id: "id3",
    value: "Buy a bike",
    is_completed: false,
  },
  {
    id: "id2",
    is_completed: true,
    value: "Read a book",
  }
];
export default function ToDO() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(tasksDb);
  const [completedTasks, setCompletedTasks] = useState([]);
const [taskList, setTaskList] = useState([]);

  useEffect(()=>{
      setTasks(tasksDb)
  },[tasks])

  // useEffect(() => {
  //   console.log('tasks', tasks)
    
  //   setTaskList(tasks.filter((task)=> task.is_completed === false))
  //   setCompletedTasks(tasks.filter((task)=> task.is_completed === true))

  // }, [tasks]);
  
  const handleChange = (e) => {
    const value =  e.target.value;
    console.log('value from handlechange', value)
    setTask(value);
  };
  
  const addTask = (e) => {
    //adding task to the db and showing it in the UI
    const toDo = {
      id: nextId(),
      value: task,
      is_completed: false,
    };
    console.log(toDo);
    // tasksDb.push(toDo);
    setTasks(toDo)
    console.log(tasks)
  };

  const handleTask = (value) =>{
    console.log('value', value)
    tasks.map((task)=>{
      if(task.id == value){
       return {...task, is_completed:true}
      }
      console.log('task after change', task)
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

          {tasks && tasks.length > 0? (
            tasks.map((task) => <TaskCard  task={task} handleTask={handleTask} /> )
            ) : (
            <div> No More tasks left to do 😀 </div>
          )}
        </div>
        
      </Row>
    </div>
  );
}
