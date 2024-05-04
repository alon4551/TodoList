import { useEffect, useState } from 'react';
import './Tesk.css'

function Tesk(props){
    const [check,setCheck]=useState(props.check)
    const [tesk,setTesk]=useState(props.tesk)
    const cross=()=>{
        if(check){
            document.querySelector(`#${props.id}`).classList.add('cross')
        }
        else{
            document.querySelector(`#${props.id}`).classList.remove('cross')
        }
    }
    const handleInputChange =()=>{
        setCheck(!check)
        cross()
    }
    const onChange =(data)=>{
        setTesk(data.target.value)
    }
    useEffect(()=>{
        cross()
        document.querySelector(`input#${props.id}`).value=tesk
    })
    return <div className='tesk'>
        <img src="https://pngimg.com/uploads/dot/dot_PNG29.png" onClick={handleInputChange}/>
        <input type="checkbox" checked={check} onChange={handleInputChange}/>
        <input id={props.id} type='text' onChange={onChange} className='tesk'/>
    </div>
}
export default Tesk;