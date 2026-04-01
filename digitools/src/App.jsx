
import { useState } from 'react'
import './App.css'
import Herosection from './Components/Herosection'
import Navbar from './Components/Navbar'
import ProductsCards from './Components/ProductsCards'
import Ratings from './Components/Ratings'

function App() {

  const [cartCount, setcartCount] = useState([]);


  return (
    <div className='max-w-400  max-h-screen h-full  mx-auto px-3 flex flex-col gap-2 '>
      <Navbar />
      <Herosection />
      <Ratings />
      <ProductsCards setcartCount={setcartCount} cartCount={cartCount} />

    </div>
  )
}

export default App
