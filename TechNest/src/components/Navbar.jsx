import {ShoppingCart} from 'lucide-react'
const Navbar = () => {
  return (
    <>
    <header>
        <div className="logo">My App</div>
        <div className="nav-links">
            <nav>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Services</a>
                <a href="">Contact</a>
            </nav>
        </div>
        <div className="nav-icons">
         <i>   <ShoppingCart strokeWidth={1.5} /></i>
        </div>
    </header>
    </>
  )
}

export default Navbar