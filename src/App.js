import {useState} from "react"
import React from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTodo from "./components/AddTodo"

function App() {
  const [tasks, setTasks] = useState([
    {
    id:1,
    text: "Doctor's Appointment",
    day: "Feb 5th at 2:30pm",
    reminder: true
    },
     {
    id:2,
    text: "Meeting at school",
    day: "Feb 6th at 2:30pm",
    reminder: true
    },
     {
    id:3,
    text: "Food Shopping",
    day: "Feb 5th at 1:30pm",
    reminder: false
    }
])


const addTodo = (task)=> {
  const id = Math.floor(Math.random()* 10000) + 1
  // console.log(id);
  const newTodo = {id, ...task}
  setTasks([...tasks, newTodo])
}

function deleteTask(id){
//  console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id))
}


  return (
    <div className="container">
      <Header title=" My todo App" />
      <AddTodo onAdd={addTodo} />
      {tasks.length >  0 ? 
        <Tasks  
        tasks ={tasks} 
        onDelete={deleteTask} 
        />
        : "You do not have any tasks"}
    </div>
  );
}

export default App;
