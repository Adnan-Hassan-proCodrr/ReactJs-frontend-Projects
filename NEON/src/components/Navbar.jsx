
const Navbar = () => {
  return (
    <header>
        <div className="logo">

<h3><i>NeoN</i></h3>        </div>
        {/* links  */}
        <div className="nav-links">
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Service</a>
                <a href="#">Contact</a>
            </nav>
        </div>
        {/* icons  */}
        <div className="icons">
            <i>search</i>
            <i>cart</i>
            <i>profile</i>
        </div>
    </header>
  )
}

export default Navbar