import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {AddTodo} from "./MyComponents/AddTodo";
import {Footer} from "./MyComponents/Footer";
import React, {useState} from 'react';
//useState is used for state hooks
function App() {
  const onDelete=(todo) =>{
    console.log("I am on ondelete of todo",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  
  const addTodo=(title,desc)=> {
      console.log("added ToDo",title,desc);
  }

// setTodos is a function which will update ui everytime component is deleted 
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "residence certificate",
      desc: "apply for residence certificate"
    },
    {
      sno: 2,
      title: "internship certificate",
      desc: "apply for internship certificate"
    },
    {
      sno: 3,
      title: "python certificate",
      desc: "apply for python certificate"
    }
  ]);
  return (
    <>
    <Header title="To-do-List" searchBar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/> {/* defines 2 components to todos*/}
    <br/>
    <Footer/>
    </>
  );
}

export default App;
