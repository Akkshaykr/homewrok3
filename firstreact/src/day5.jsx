import React,{useEffect, useState} from 'react';
function App(){
    let [count,setcount]=useState(0);
    useEffect(()=>{
        console.log("Value updated");
    },[count])


    return(
        <div>
            <h1>
                count:{count}
            </h1>
            <button onClick={()=>setcount(count+1)}>+</button>
            <button onClick={()=>setcount(count-1)}>-</button>

        </div>
    )
}
export default App
