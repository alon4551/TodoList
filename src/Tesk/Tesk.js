import { useEffect, useState } from 'react';
import './Tesk.css'

function Tesk(props){
    const [check,setCheck]=useState(props.check)
    const cross=()=>{
        if(check===false){
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
    useEffect(()=>{
        cross()
    })
    return <div >
        <input type="checkbox" checked={check} onChange={handleInputChange}/>
        <input id={props.id} type='text' value={props.tesk}/>
    </div>
}
export default Tesk;