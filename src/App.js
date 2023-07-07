
import './App.css';
import Navbar from './components/Navbar'
import Todo from './components/Todo';
import Alert from './components/Alert';
import React,{useState} from "react"



function App(){
 const [mode,setmode]=useState("light")
 const [alert,setalert]=useState(null)
 const showmessage=(message,type)=>{
  setalert({
    message:message,
    type:type

  })
  
 }
 const togglemode=()=>{
  if (mode==="light"){
    setmode("dark");
    document.body.style.backgroundColor="#212529"
    showmessage("dark mode enabled","success");
  }
  else{
    setmode("light");
    document.body.style.backgroundColor="white"
    showmessage("light mode enabled","success");
  
  }
 }
  
  return(
    <div>  

    <Navbar title="Txrutils" about="About" mode={mode} togglemode={togglemode}/>
    <div className="container my-3">
      <Todo heading="Enter your text" mode={mode}/>

    </div> 
       

   
    
    
    
    
    
    
    </div>
    
      
      
  );
}

export default App;
