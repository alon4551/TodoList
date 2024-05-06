import { useEffect, useState } from 'react';
import './Task.css'

function Task(props){
    const [check,setCheck]=useState(props.check)
    const [task,setTask]=useState(props.task)

    const handleRemove= ()=>{
        props.remove(props.index)
    }
    const handleInputChange =()=>{
        setCheck(prev=>!prev)
    }
    const onChange =(data)=>{
        setTask(prev=>data.target.value)
    }
    useEffect(()=>{
        document.querySelector(`input#${props.id}`).value=task
    })
    useEffect(()=>{
        setCheck(props.check);
        setTask(props.task);
    },[props])
    return <div className={`task popin`}>
        <img src="https://pngimg.com/uploads/dot/dot_PNG29.png" onClick={handleInputChange}/>
        <input type="checkbox" checked={check} onChange={handleInputChange}/>
        <input id={props.id} type='text' onChange={onChange} className={`task ${check?"cross":""}`}/>
        <button onClick={handleRemove} className='taskBtn'><img src='/x-circle.svg'/></button>
    </div>
}
export default Task;