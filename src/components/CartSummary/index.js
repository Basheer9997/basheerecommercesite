import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const noOfItems = cartList.length
      const totalAmount = cartList.reduce(
        (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
        0,
      )

      return (
        <div className="cart-summary-container">
          <h1 className="total-amount-heading">
            Order Total:
            <span className="total-amount">Rs {totalAmount}/-</span>
          </h1>
          <p className="no-of-items">{noOfItems} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary