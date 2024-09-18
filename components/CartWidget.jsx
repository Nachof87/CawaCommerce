import logo from '../src/assets/cart-logo.png'

function CartWidget(){
    return(
        <div>
            <img src={logo} alt='cart-widget' className='class-Cart'/>
            <h className='class-CartCount'>3</h>
        </div>
        

    )
}

export default CartWidget