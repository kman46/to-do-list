import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";


function App() {
  let myVarible = 46;
  return (
    <>
    <Header/>
    <Todos/>
    <br/>
    <Footer/>
    </>
  );
}

export default App;
