import logo from '../src/assets/cart-logo.png'
import { useCartContext } from '../context/cartContext'

function CartWidget(){
    const { getQty } = useCartContext()
    return(
        <div>
            <img src={logo} alt='cart-widget' className='class-Cart'/>
            <span className='class-CartCount'>{getQty()}</span>
        </div>
        

    )
}

export default CartWidget