import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class ThirdPage extends React.Component {
  total() {
    let total = 0,
      totalWeight = 0,
      delivery = 0;
    for (let i = 0; i < this.props.goods.length; i++) {
      total +=
        (this.props.goods[i].price *
          (100 - this.props.goods[i].discount) *
          this.props.goods[i].added) /
        100;
      totalWeight += this.props.goods[i].weight * this.props.goods[i].added;
    }
    switch (this.props.delivery) {
      case "courier":
        if (total < 6900) delivery += 10;
        total += delivery;
        break;
      case "post":
        Math.round(totalWeight);
        delivery += 5 * totalWeight/1000;
        total += delivery;
        break;
      default:
        break;
    }
    return (
      <>
        <h2>Общая стоимость: {total}$</h2>
        <h4>Стоимость доставки: {delivery} BYN</h4>
        <h5>Масса: {totalWeight} г</h5>
      </>
    );
  }
  render() {
    return (
      <>
      <div className="goods">
      <h1 style={{textAlign:'center',color:'#c804cf'}}>Оформление заказа</h1>
        <div className="progress_bar_bg">
          <div
            className="progress_bar"
            style={{ width: "100%" }}
          />
        </div>
        <ul className="list">
          {this.props.goods.map((item) => {
            return (
              <li key={item.key}>
                <h2>{item.name}</h2>
                <h3>Количество: {item.added}</h3>
                <h3>
                  Стоимость единицы товара:{" "}
                  {(item.price * (100 - item.discount)) / 100}$
                </h3>
                <h4>
                  Общая стоимость товара:{" "}
                  {(item.price * (100 - item.discount) * item.added) / 100}$
                </h4>
                <br />
                <br />
              </li>
            );
          })}
        </ul>
        {this.total()}
        <h3>Доставка: {this.props.delivery}</h3>
        <h3>Оплата: {this.props.payment}</h3>
        {this.props.address && <h3>Адресс: {this.props.address}</h3>}
        <div style={{display:'flex'}}>
        <Link to="/secondPage">
        <span className="ss1"><a href="#"></a></span>
        </Link>
        <span className="ss2"><a href="#"></a></span>
        </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    goods: state.goods,
    delivery: state.deliveryMethod,
    payment: state.paymentMethod,
    address: state.address,
  };
};
export default connect(mapStateToProps)(ThirdPage);
