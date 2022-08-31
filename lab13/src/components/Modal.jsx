import React, { Component } from "react";
import {connect} from "react-redux"

class Modal extends Component {
    total() {
        let total = 0;
        for (let i = 0; i < this.props.goods.length; i++) {
            total += (this.props.goods[i].price * (100 - this.props.goods[i].discount)) / 100
        }
        return total;
    }
        render() {
            let item = this.props.goods[this.props.goods.length - 1];
        return (      
            <div className="overlay" onClick={this.props.toCatalog}>
                <div className="modal">
                    <h2>Name:{item.name}</h2>
                    <h2>Price:{item.price * (100 - item.discount) / 100}$</h2>
                    <h3>Goods in cart: {this.props.goods.length}</h3>
                    <h4>Total: {Math.round(this.total()*100) / 100}$</h4>
                    <button className="to_catalog" onClick={this.props.toCatalog}>Back to Catalog</button>
                    <button className="to_order" onClick={this.props.toOrder}>To Order</button> 
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
