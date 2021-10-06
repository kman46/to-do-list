import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import React, {useState} from 'react';

function App() {
  const onDelete=(todo) =>{
    console.log("I am on ondelete of todo",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
{/* setTodos is a function which will update ui everytime component is deleted */}
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
    <Todos todos={todos} onDelete={onDelete}/> {/* defines 2 components to todos*/}
    <br/>
    <Footer/>
    </>
  );
}

export default App;
