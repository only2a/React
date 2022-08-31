import React from "react";
import { deliveryMethod, paymentMethod, address } from "../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SecondPage extends React.Component {
  state = {
    address: true,
  };
  radiobuttonsHandler(e) {
    if (e.target.value === "myself") {
      this.setState({ address: false });
    }
    if (e.target.name === "delivery") {
      return this.props.deliveryMethod(e.target.value);
    }
    return this.props.paymentMethod(e.target.value);
  }
  addressHandler = (e) => {
    this.props.address(e.target.value);
  };
  render() {
    return (
      <>
      <div className="goods">
      <h1 style={{textAlign:'center',color:'#c804cf'}}>Оформление заказа</h1>
        <div className="progress_bar_bg">
          <div
            className="progress_bar"
            style={{ width: "66%" }}
          />
        </div>
        <h3 style={{textAlign:'center',color:'#c804cf'}}>Способ доставки</h3>
        <ul className="delivery">
          <li>
            <input
              type="radio"
              name="delivery"
              value="courier"
              onClick={(e) => this.radiobuttonsHandler(e)}
            />
            Курьером
          </li>
          <li>
            <input
              type="radio"
              name="delivery"
              value="post"
              onClick={(e) => this.radiobuttonsHandler(e)}
            />
            Почтой
          </li>
          <li>
            <input
              type="radio"
              name="delivery"
              value="myself"
              onClick={(e) => this.radiobuttonsHandler(e)}
            />
            Самовывоз
          </li>
          <li>
            Адрес
            <input
              type="text"
              disabled={!this.state.address}
              onChange={this.addressHandler}
            />
          </li>
        </ul>
        <h3 style={{textAlign:'center',color:'#c804cf'}}>Способ оплаты</h3>
        <ul className="payment">
          <li>
            <input
              type="radio"
              name="payment"
              value="cash"
              onClick={(e) => this.radiobuttonsHandler(e)}
            />
            Наличными
          </li>

          <li>
            <input
              type="radio"
              name="payment"
              value="creditCard"
              onClick={(e) => this.radiobuttonsHandler(e)}
            />
            Банковской картой
          </li>

          <li>
            <input
              type="radio"
              name="payment"
              value="transfer"
              onClick={(e) => this.radiobuttonsHandler(e)}
            />
            Банковский перевод
          </li>
        </ul>
        
        <div style={{display:'flex'}}>
        <Link to="/">
        <span className="ss1"><a href="#"></a></span>
        </Link>
        <Link to="/thirdPage">
        <span className="ss"><a href="#"></a></span>
        </Link>
        </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    goods: state.goods,
  };
};
const mapDispatchToProps = {
  deliveryMethod,
  paymentMethod,
  address,
};
export default connect(mapStateToProps, mapDispatchToProps)(SecondPage);
