import React from "react"

const Checkout = class extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_XiirziufElakjoOpyuyCrPfo")
  }
  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: "sku_Fvit7rtTpQFLdF", quantity: 1 }],
      successUrl: `https://www.usepow.app/YoHoho`,
      cancelUrl: `http://localhost:8000/`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }
  render() {
    return (
      <button
        style={buttonStyles}
        onClick={event => this.redirectToCheckout(event)}
      >
        Invest in POW! {this.props.price} {this.props.name}
      </button>
    )
  }
}
export default Checkout
