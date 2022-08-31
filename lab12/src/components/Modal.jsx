import React, { Component } from "react";
import {connect} from "react-redux"
import {store} from "../index"

export class Modal extends Component {
    total() {
        let total = 0;
        for (let i = 0; i < store.getState().goods.length; i++) {
            total += (store.getState().goods[i].price * (100 - store.getState().goods[i].discount)) / 100
        }
        return total;
    }
        render() {
            let item = store.getState().goods[store.getState().goods.length - 1];
        return (      
            <div className="overlay" onClick={this.props.toCatalog}>
                <div className="modal">
                    <h2>Наименование:<span style={{color:'#c804cf'}}>{item.name}</span></h2>
                    <h2>Цена:<span style={{color:'#c804cf'}}>{item.price * (100 - item.discount) / 100}BYN</span></h2>
                    <h3>Товаров в корзине: <span style={{color:'#c804cf'}}>{store.getState().goods.length}</span></h3>
                    <h4>Total:<span style={{color:'#c804cf'}}> {Math.round(this.total()*100) / 100}BYN</span></h4>
                    <button className="to_catalog" onClick={this.props.toCatalog}>К каталогу</button>
                    <button className="to_order">К заказу</button> 
                </div>
            </div>
        )
        }
}

const mapStateToProps = (state) => {
    return {
        goods: state.goods
    }
}

export default connect(mapStateToProps)(Modal);
