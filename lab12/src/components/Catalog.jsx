
import React, { Component } from "react";
import "./Catalog.css";
import { Search } from "./Search.jsx";
import ReactDOM from "react-dom"
import "../index.css";
import { connect } from "react-redux";
import { Modal } from "./Modal.jsx";
import { addToCart } from "../redux/actions";

export class Catalog extends Component {
  constructor(props) {
    super(props);
    
    this.state = {array: this.array, isModalOpen: false, search: "", searchParameter: "partial" };
    this.sorted = { name: true, price: true, inStock: true, discount: true};
  }
  array = [
    { id: "THC", name: "TAG Heuer Connected", price: 6800, inStock: 3, img: "/imgs/TagHeuer.webp", desc: "Мужские, спортивные, электронные наручные часы TAG Heuer Connected 45 mm",weight:210, new: true, discount: 20 },
    { id: "GPB", name: "Girard-Perregaux Bridges", price: 7000, inStock: 1, img: "/imgs/Girard-Perregaux.webp", desc: "Мужские, классические, автоматические наручные часы Girard-Perregaux Quasar",weight:187, new: true, discount: 10 },
    { id: "LHC", name: "Longines Heritage Collection", price: 14571, inStock: 25, img: "/imgs/Longines.webp", desc: "Мужские, классические, автоматические наручные часы Longines Avigation Bigeye 41 mm",weight:148, new: true, discount: 40 },
    { id: "IWC", name: "IWC Pilot’s", price:51000, inStock: 2, img: "/imgs/IWC.webp", desc: "Мужские, спортивные, автоматические наручные часы IWC Big Pilot’s Watch Spitfire 43 mm",weight:154, new: false, discount: 15 },
    { id: "UNM", name: "Ulysse Nardin Marine", price: 94077, inStock: 0, img: "/imgs/Ulysse.webp", desc: "Мужские, классические, автоматические наручные часы Zenith Chronomaster Revival El Primero A384 Revival 37 mm",weight:150, new: false, discount: 30 },
    { id: "ZC", name: "Zenith Chronomaster", price: 33525, inStock: 16, img: "/imgs/Zenith.webp", desc: "Мужские, спортивные, автоматические наручные часы Ulysse Nardin Chronometer Torpilleur 42 mm", weight:154, new: false, discount: 25 },
  ];
  sort(byWhat) {
    let direction = this.sorted[byWhat] ? 1 : -1,
    arrayCopy = [...this.state.array].sort(function (a, b) {
        if (a.new || b.new)
        return 0
        if (a[byWhat] > b[byWhat]) {
          return direction;
        }
        if (a[byWhat] < b[byWhat]) {
          return direction * -1;
        }
        return 0;
      });
    this.sorted[byWhat] = !this.sorted[byWhat];
    this.setState({ array: arrayCopy });
  }
  sorts() {   
    return (
      <div className="divBut">
        <button className="fill" onClick={() => this.sort("name")}>Name</button>
        <button className="fill" onClick={() => this.sort("price")}>Price</button>
        <button className="fill" onClick={() => this.sort("inStock")}>In Stock</button>
        <button className="fill" onClick={() => this.sort("discount")}>Discount</button>
      </div>
    );
  }
  onClickHandler(item) {
    this.props.addToCart(item);
    let newItem = item;
    newItem.inStock-=1;
    for (let i = 0; i < this.state.array.length; i++) {
      if (this.state.array[i] === item)
    this.setState({array: [...this.state.array.slice(0, i), newItem, ...this.state.array.slice(i+1)]})      
    }
    this.setState({isModalOpen: true});
  }
  goods() {
   
    return this.state.array
    .filter((item) => {
      if (!this.state.search) return item;
      switch (this.state.searchParameter) {
        case "partial":
          if (
            item.name.toLowerCase().includes(this.state.search.toLowerCase())
          ) {
            return item;
          }
          break;
        case "full":
          if (item.name.toLowerCase() === this.state.search.toLowerCase()) {
            return item;
          }
          break;
          default: return item;
      }
    })
    .map((item) => {
      return (
        
        <div className="one_good">
          <img src={item.img} alt="" />
          <div className="text">
            <div className="discount">
              {item.new && <div class="prod_new"><h2>Новинка</h2></div>}
                <div class="prod_disc"><h2>{item.discount}%</h2> </div>
               
            </div>
            <div class="prod_info">
              <h2 class="prod_name">{item.name}</h2>
            <div className="prices">
            {item.discount && <h2>{(item.price * (100 - item.discount)) / 100}BYN</h2>}
            <h3>{item.price}BYN</h3>
            </div>
              <div class="prod_count"><h4>Количество: {item.inStock} шт.</h4></div>
              <div class="prod_count"><h4>Вес: {item.weight} г</h4></div>
            <div class="prod_descr">{item.desc}</div>
            </div>
            
          </div>
          <button
                className="cart"
                onClick={() => this.onClickHandler(item)}
                disabled={!item.inStock}
              >
                buy
              </button>
        </div>
        
      );
    });
  }
  closeModal = () => {
    this.setState({isModalOpen: false})
  }
  search = (item) => {
    this.setState({ search: item });
  };
  searchParameter = (item) => {
    this.setState({searchParameter: item})
  }
  render() {
    return (
      <>
        <Search search={this.search} searchParameter={this.searchParameter} />
        {this.sorts()}
        <div className="catalog">
        {this.goods()}
        </div>
        {this.state.isModalOpen && ReactDOM.createPortal(
          <Modal toCatalog={this.closeModal}/>,
          document.getElementById("portal")
        )}
      </>
    );
  }
}
const mapDispatchToProps = {
    addToCart,
  };
  export default connect(null, mapDispatchToProps)(Catalog);