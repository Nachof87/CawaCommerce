import CartWidget from '../components/CartWidget'

function NavBar(){
    return(

        <nav className='class-NavBar'
        >
            <h3>E-Commerce</h3>
            <div>
                <button >  Monitores  </button>
                <button >  Televisores  </button>
                <button >  Proyectores  </button>
            </div>
            <CartWidget></CartWidget>
        </nav>

    )
}

export default NavBar