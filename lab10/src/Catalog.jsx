import { SortTable } from "./SortTable.js";
import React, { Component } from "react";
import "./Catalog.css";
import { Search } from "./Search.jsx";
export class Catalog extends Component {
  constructor(props) {
    super(props);
    this.sortTableRef = React.createRef();
    this.state = { loaded: false, search: "", searchParameter: "partial" };
    this.sorted = { name: true, price: true, inStock: true, discount: true};
  }
  componentDidMount() {
    this.setState({ loaded: true, array: this.sortTableRef.current.goods});
  }
  sort(byWhat) {
    let direction = this.sorted[byWhat] ? 1 : -1,
      goodsCopy = [...this.sortTableRef.current.goods].sort(function (a, b) {
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
    this.setState({ array: goodsCopy });
  }
  sorts() {   
    return (
      <div className="divBut">
        <button className="fill" onClick={() => this.sort("name")}>
          Name
        </button>
        <button className="fill" onClick={() => this.sort("price")}>
          Price
        </button>
        <button className="fill" onClick={() => this.sort("inStock")}>
          In Stock
        </button>
        <button className="fill" onClick={() => this.sort("discount")}>
          Discount
        </button>
      </div>
    );
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
                <div class="prod_disc"><h2>{item.discount}%</h2></div>
            </div>
            <div class="prod_info">
              <h2 class="prod_name">{item.name}</h2>
            <div className="prices">
            {item.discount && <h2>{(item.price * (100 - item.discount)) / 100}BYN</h2>}
            <h3>{item.price}BYN</h3>
            </div>
              <div class="prod_count"><h4>Количество: {item.inStock} шт.</h4></div>
            <div class="prod_descr">{item.desc}</div>
            </div>
            
          </div>
        </div>
        
      );
    });
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
        
        {this.state.loaded && this.sorts()}
        <div className="catalog">
        {this.state.loaded && this.goods()}
        </div>
        <SortTable ref={this.sortTableRef} />
        
      </>
    );
  }
}
