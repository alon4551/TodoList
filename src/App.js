import { useEffect, useState } from 'react';
import './App.css';
import Task from './Task/Task';
function App() {
const [list,setList]=useState(JSON.parse(localStorage.getItem("taskList"))) 
  const removeItem = (index)=>{
    setList(prevList=>{
      const newList = [...prevList.slice(0, index), ...prevList.slice(index + 1)];
      return newList;
    })
  }
  
  const click =  (data)=>{
    if(data.keyCode==13){
      let newTask = document.querySelector(`#insertTask`)
      setList([...list,{
       task: newTask.value,
       check:false
      }])
      newTask.value ="";
    }
  }
  useEffect(()=>{
    localStorage.setItem("taskList",JSON.stringify(list))
  },[list])
  return (
    <div className="App">
      <h1>
        My Tasks
      </h1>
      <div className='container'>
      {
        list.map((item,index)=>{
          
        return <Task task={item.task} check ={item.check} id={"task"+index} index={index} remove={removeItem}/>
      })
      }
      </div >
      <div className="insertTask">
      <input id="insertTask" type='text' placeholder='Enter Task' onKeyDown={click}/>
        </div>
    </div>
  );
}

export default App;
