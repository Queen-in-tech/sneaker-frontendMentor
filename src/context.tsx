import {createContext, useState}  from "react"

type CartContextType = {
    count: number
    setCount : (value: number) => void
    addToCart: boolean
    setAddToCart: (value: boolean) => void
}


const CartContext = createContext<CartContextType | null>(null)

const CartProvider = ({children}: any) => {
    const [count, setCount] = useState(0)
    const [addToCart, setAddToCart] = useState(false)



    return (
        <CartContext.Provider value={{count, setCount, addToCart, setAddToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext}