export const Checkout = (props) => { 
  return <>
  <div> Total : <b>{props.totalPrice}</b> </div>
  <button onClick={props.resetCheckout}>Clear Checkout</button>
  </>
}