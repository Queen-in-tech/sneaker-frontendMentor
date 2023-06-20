type CartContextType = {
    count: number
    addToCart: boolean
    setCount: (value: number) => void
}

import { useContext } from "react"
import { CartContext } from "../context";

const Cart = () => {
    const contextValue = useContext(CartContext) as CartContextType
    const {count, setCount, addToCart} = contextValue

  return (
    <div className="absolute h-[16rem] w-auto right-3 left-3 top-[5.2rem] py-5 md:w-[22rem] md:h-[14.5rem] shadow-xl bg-white z-10 md:top-20 lg:right-28 md:left-auto rounded-lg">
    <div className="border-b border-gray-200">
    <p className="font-bold pb-4 px-5">Cart</p>
    </div>
   {addToCart ? <div className="p-5 flex flex-col gap-7">
        <div className="flex justify-between md:justify-center md:gap-6 items-center">
            <img src="image-product-1-thumbnail.jpg" alt="product thumbnail"  className="w-12 h-12 rounded-[3px]"/>
            <div className="flex flex-col gap-1">
                <p className="capitalize text-black/50 text-sm font-semibold">fall limited edition sneakers</p>
                <p className="text-sm text-black/50 font-semibold">$125.00 x {count} <span className="text-black ml-1 font-bold" >{`$${125 * count}.00`}</span></p>
            </div>
            <img src="icon-delete.svg" alt="delete icon" className="cursor-pointer" onClick={() => setCount(0)}/>
        </div>
        <button className="w-full py-4 bg-orange-400 text-white text-sm font-bold rounded-lg hover:bg-orange-300">
           Checkout
        </button>
     </div>
   : <div className="flex justify-center items-center h-full">
        <p className="text-gray-500 font-bold">Your cart is empty.</p>
    </div>}
    </div>
  )
}

export default Cart
