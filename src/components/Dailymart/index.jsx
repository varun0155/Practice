import React from "react";
import { Item } from "../../common";
import { Checkout } from "./checkout";

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Item,
      totalPrice: 0,
    }
  }

  addItemHandler = (price) => {
    this.setState((prevstate) => ({
      totalPrice: prevstate.totalPrice + price,
    }), () => alert("Item has been added"));
  }

  removeItemHandler = (price) => {
    this.setState((prevstate) => ({
      totalPrice: prevstate.totalPrice - price < 0 ? 0 : prevstate.totalPrice - price,
    }), () => alert("Item has been removed"));
  }

  resetCheckout = () => {
    this.setState({
      totalPrice: 0,
    })
  }

  render() {
    return <>
      <h3>WishList</h3>
      <ul>
        {
          this.state.items.map((item, index) => <li key={index}>
            <img src={item.img} height="300px" width="300px" alt= ""/>
            <div>
              <span>Name:{item.name}</span>

              <span>Price:{item.price}</span>
            </div>

            <button onClick={() => this.addItemHandler(item.price)}> Add to cart </button>

            <button onClick={() => this.removeItemHandler(item.price)}>Remove from Cart</button>

          </li>)}
      </ul>

      <Checkout totalPrice={this.State.totalPrice} resetCheckout={this.resetCheckout} />

    </>
  }
}

export default Items