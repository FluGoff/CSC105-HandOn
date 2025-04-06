import {useState } from "react"
import Products from "./components/Products"

function App() {
  const [add, setAdd] = useState([])
  const [input, setInput] = useState('')

  const addHanddle = (product) => {
    if(product !== '') {
      setAdd([...add, product])
      setInput('')
    }
  }

  return (
    <div className="flex justify-center items-center bg-gray-100 w-screen min-h-screen">
      
      <div className="bg-white p-5 rounded-lg w-auto">
        <h1 className="font-semibold text-3xl text-center">Shopping List</h1>

        <div className="grid grid-cols-4 gap-2 mt-5 mb-3">
          <input 
            className="border-1 border-gray-200 rounded-sm p-2 col-span-3"
            type="text"
            value={input}
            placeholder="Enter item"
            onChange={(event) => {
              setInput(event.target.value)
            }}
          />

          <button 
            className="bg-green-400 hover:bg-green-500 text-white p-2 rounded-sm"
            onClick={() => addHanddle(input)}
          >Add</button>
        </div>
        
        <ul className="mt-5">
          {add.map((item, index) => (
            <Products 
            key={index} 
            product={item} 
            remove={() => {
                setAdd(add.filter((_, i) => i !== index))
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
