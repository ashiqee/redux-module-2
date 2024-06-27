import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/features/counterSlice"


function App() {
  const {count} = useSelector((state)=> state.counter)
  const dispatch = useDispatch()


  return (
    <div className="h-screen w-full flex justify-center items-center">
<div className="border border-purple-500 rounded-md bg-slate-50 p-10 flex justify-center items-center">
 
 <button
 onClick={()=>dispatch(increment())}
 className=" px-3 py-2 rounded-md bg-green-800 text-white">Increment</button>
 <h1 className=" text-3xl mx-10">{count}</h1>
 <button  onClick={()=>dispatch(decrement())} className=" px-3 py-2 rounded-md bg-red-800 text-white">Decrement</button>
</div>
    </div>
  )
}

export default App
