type CartContextType = {
  count: number
  addToCart: boolean
}

import { CartContext } from "../context"; 
import { useState, useContext } from "react"
import MobileNav from "./MobileNav"
import Cart from "./Cart"

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false)
  const [toggleCart, setToggleCart] = useState(false)
  const contextValue = useContext(CartContext) as CartContextType
  const {count, addToCart} = contextValue

  return (
    <header className="flex px-7 justify-between md:border-b md:border-gray-100">
      <div className="flex gap-4 md:gap-16 items-center justify-center ">
        <img src="icon-menu.svg" alt="hamburger" className="md:hidden cursor-pointer" onClick={() => setToggleNav(true)}/>
      <img src="logo.svg" alt="logo" className="md:pb-8"/>
        <ul className="hidden md:flex md:gap-5 lg:gap-6 text-[14px] text-gray-500">
          <li className="navLinks">Collections</li>
          <li className="navLinks">Men</li>
          <li className="navLinks">Women</li>
          <li className="navLinks">About</li>
          <li className="navLinks">Contact</li>
        </ul>
      </div>

      <div className="flex gap-6 md:gap-8 items-center md:pb-8">
        <div className="relative">
        {count > 0 && addToCart && <div className="absolute -top-2 -right-2 text-[10px] text-white bg-orange-400 px-[6px] rounded-full">
          {count}
        </div>}
        <img src="icon-cart.svg" alt="cart icon" className="w-6 h-6 md:w-5 md:h-5 cursor-pointer" onClick={() => setToggleCart(!toggleCart)}/>
        </div>
        <div className="cursor-pointer hover:border-2 rounded-full hover:border-yellow-500">
        <img src="image-avatar.png" alt="profile picture" className="w-8 h-8 object-contain" />
        </div>
      </div>

      {toggleNav && <MobileNav setToggleNav={setToggleNav}/>}
      {toggleCart && <Cart/>}
    </header>
  )
}

export default Header
