import React from "react";
import { addToCart, deleteFromCart } from "../redux/actions";
import {connect } from "react-redux"
import { Link } from "react-router-dom";
import "../CssForPages/FirstPage.css"

class FirstPage extends React.Component {
  state={
    TooMuch: false
  }
    checkboxOnChange(e, item) {
        if (e.target.checked)
         item.check;
        else item.check.setState(false);
    }
    inputOnChange(e, item) {
      for (let i = 0; i < this.props.goods.length; i++) {
        if (this.props.goods[i] === item && item.check) {
          this.props.goods[i].added = +e.target.value
        }
      }
      if (+e.target.value > item.inStock)
      return this.setState({TooMuch: true})
      return this.setState({TooMuch: false})
    }
    total() {
        let total = 0;
        for (let i = 0; i < this.props.goods.length; i++) {
          if(item.check)
            total += (this.props.goods[i].price * (100 - this.props.goods[i].discount) * this.props.goods[i].added) / 100
        }
        return total;
    }
    withoutDisc() {
        let total = 0;
        for (let i = 0; i < this.props.goods.length; i++) {
          if(item.check)
            total += this.props.goods[i].price * this.props.goods[i].added
        }
        return total; 
    }
    
  render() {
    let goods = this.props.goods;
    return <>
          
          <div className="goods">
            <h1 style={{textAlign:'center',color:'#c804cf'}}>Оформление заказа</h1>
           <div className="progress_bar_bg">
        <div className="progress_bar" style={{ width: "30%" }} />
      </div>
    {goods.map((item) => {
      return <><div key={item.id} className="good_in_cart">
          
          <h3>Наименование:{(item.name)}</h3>
          <h4>Цена:{(item.price * (100 - item.discount)) / 100}$</h4>
          <input type="number" name="numberOfGoods" min={"0"} defaultValue="0" onChange={(e) => this.inputOnChange(e, item)} />
          <input type="checkbox" name="inCart"  onChange={(e) => this.checkboxOnChange(e, item)}/>
          <button onClick={(e) => this.props.deleteFromCart(item)}>Удалить</button>
      </div>
      <br/>
      </>;
    })}
    </div>
    <div className="Total">
      {this.state.TooMuch && <h3 style={{color: "red"}}>Нет товара!</h3>}
      <h2>Общая стоимость: {Math.round(this.total()*100) / 100}BYN</h2>
      <h4>Без скидки: {Math.round(this.withoutDisc()*100) / 100}BYN </h4> 
      <Link to="/secondPage"><span className="ss"><a href="#"></a></span></Link>
    </div>
    </>
  }
}
const mapStateToProps = (state) => {
  return {
      goods: state.goods
  }
}
const mapDispatchToProps = {
    deleteFromCart,
    addToCart
  };
  export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);