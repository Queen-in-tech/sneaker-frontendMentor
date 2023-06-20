import Header from "./components/Header"
import Product from "./components/Product"

import { CartProvider } from "./context"

function App() {
  return (
    <CartProvider>
    <div className="relative py-5 md:px-18 lg:px-28 md:py-7">
    <Header/>
    <Product/>
    </div>
    </CartProvider>
  )
}

export default App
