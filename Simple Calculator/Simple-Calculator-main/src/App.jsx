import { useState } from "react"
import Button from "./components/Button.jsx"

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')

  return (
    <div className="flex justify-center items-center bg-gray-100 w-screen min-h-screen">
      <div className="bg-white p-5 rounded-lg">

        <div className="grid grid-cols-3 place-items-center mt-5">
          <h1 className="text-4xl font-semibold col-span-3 text-center">
            Simple Calculator
          </h1>
          <span className="col-span-3 text-center bg-gray-100 rounded-sm p-2 m-5">Result: {count}</span>
        </div>


        <div className="grid grid-cols-3 place-items-center">
          <input 
            className="block border-2 border-gray-200 p-2 rounded-sm m-2 col-span-3 w-full"
            name="number" 
            value={input} 
            placeholder="Enter number" 
            onChange={(event) => {
              const value = parseInt(event.target.value)
              setInput(isNaN(value) ? 0 : value)
            }}
          />
        </div>

        <div className="grid grid-cols-4 gap-2 mt-5">
          <Button nameButton={"Add"} bgColor={"bg-blue-500"} onClick={() => setCount(count + input)} />
          <Button nameButton={'Subtract'} bgColor={"bg-blue-500"} onClick={() => setCount(count - input)} />
          <Button nameButton={'Multiply'} bgColor={"bg-blue-500"} onClick={() => setCount(count * input)} />
          <Button nameButton={'Divide'} bgColor={"bg-blue-500"} onClick={() => setCount(count / input)} />

          <div className="col-span-4 flex justify-center items-center space-x-2">
            <Button nameButton="Reset Input" bgColor="bg-red-400" onClick={() => setInput('')} />
            <Button nameButton="Reset Result" bgColor="bg-blue-500" onClick={() => setCount(0)} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
