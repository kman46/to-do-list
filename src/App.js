import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";


function App() {
  let todos = [
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
  ]
  return (
    <>
    <Header title="To-do-List" searchBar={false}/>
    <Todos todos={todos}/>
    <br/>
    <Footer/>
    </>
  );
}

export default App;
