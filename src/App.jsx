import Announcement from "./components/Announcement"
import Footer from "./components/Footer"
import Header from "./components/Header"
import NewsLetter from "./components/NewsLetter"
import ShopBoard from "./components/ShopBoard"
import CartProvider from "./Provider/CartProvider"

function App() {
  return (
    <CartProvider>
      <Announcement></Announcement>
      <Header></Header>
      <ShopBoard></ShopBoard>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </CartProvider>
  )
}

export default App
