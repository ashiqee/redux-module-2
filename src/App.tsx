
import { useEffect, useState } from "react"
import { decrement, increment, incrementByValue,decrementByValue } from "./redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook"



function App() {
  const {count} = useAppSelector((state)=> state.counter)
  const dispatch = useAppDispatch()
  const [sqr,setSqr]= useState([])


  useEffect(()=>{
 
      if(count % 5 ===0 && count !== 0){
        setSqr( preCount=> [...preCount,count]);
        
      }
      
     
      
   
      
  
  },[count])

  // make uuinqe   Using Set
  const uniqueSqr = [...new Set(sqr)];
 
  const handleRemove = () => {
    dispatch(decrementByValue(5))
    setSqr((prevSqr) => {
      const newSqr = [...prevSqr];
      newSqr.pop();
      return newSqr;
    });
  };
  return (
  <div className="h-screen w-full  ">
      <div className=" h-screen flex justify-center items-center">
<div className="space-y-3 ">
 <div className="flex justify-center items-center border border-purple-500 rounded-md bg-slate-50 p-10">
 <button
 onClick={()=>dispatch(increment())}
 className=" px-3 py-2 rounded-md bg-green-800 text-white">Increment</button>
 <h1 className=" text-3xl mx-10">{count}</h1>
 <button  onClick={()=>dispatch(decrement())} className=" px-3 py-2 rounded-md bg-red-800 text-white">Decrement</button>
 </div>
<button  onClick={()=>dispatch(incrementByValue(5))} 
 className=" px-3 py-2 rounded-md bg-blue-800 text-white">
  increment by 5</button>

  <button onClick={handleRemove} className=" px-3 py-2 rounded-md bg-red-800 text-white">Remove SQR</button>

  <div className="grid grid-cols-7" >
    {
    
    uniqueSqr?.map((item,i)=>(
        <div key={i} className="p-5 border-2 w-12 bg-lime-300 ">

        </div>
      ))
   
   
    }
  </div>
</div>
    </div>
  </div>
  )
}

export default App
