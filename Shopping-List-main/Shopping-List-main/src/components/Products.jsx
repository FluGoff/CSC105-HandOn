import { useState } from "react"

const Products = ({ product, remove }) => {
  const [edit, isEdit] = useState(false)
  const [currentProduct, setCurrentProduct] = useState(product)

  return (
    <div className="flex justify-between  bg-gray-100 p-3 rounded-sm mt-2">
      {(!edit) ? 
        <span className="flex items-center">{currentProduct}</span> : 
        <input 
            className="border-1 border-gray-300 rounded-sm p-2 col-span-3 mr-5"
            type="text"
            value={currentProduct}
            onChange={(event) => {
              setCurrentProduct(event.target.value)
            }}  
        />
      }
      <div className="grid grid-cols-2 gap-2">
        <button 
        className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-sm"
        onClick={() => {
          (edit) ? isEdit(false) : isEdit(true)
        }}
        >Edit</button>

        <button 
          className="bg-red-400 hover:bg-red-500 text-white p-2 rounded-sm"
          onClick={remove}
          >Remove</button>
      </div>
    </div>
  )
}
export default Products
