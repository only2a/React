import { Component } from "react";
import "./SortTable.css";

export class SortTable extends Component {
  constructor(props) {
    super(props);
    this.sorted = { name: true, price: true, inStock: true, discount: true};
    this.state = { array: this.goods };
  }
  
  goods = [
    { id: "THC", name: "TAG Heuer Connected", price: 6800, inStock: 3, img: "/imgs/TagHeuer.webp", desc: "Мужские, спортивные, электронные наручные часы TAG Heuer Connected 45 mm", new: true, discount: 20 },
    { id: "GPB", name: "Girard-Perregaux Bridges", price: 7000, inStock: 1, img: "/imgs/Girard-Perregaux.webp", desc: "Мужские, классические, автоматические наручные часы Girard-Perregaux Quasar", new: true, discount: 10 },
    { id: "LHC", name: "Longines Heritage Collection", price: 14571, inStock: 25, img: "/imgs/Longines.webp", desc: "Мужские, классические, автоматические наручные часы Longines Avigation Bigeye 41 mm", new: true, discount: 40 },
    { id: "IWC", name: "IWC Pilot’s", price:51000, inStock: 2, img: "/imgs/IWC.webp", desc: "Мужские, спортивные, автоматические наручные часы IWC Big Pilot’s Watch Spitfire 43 mm", new: false, discount: 15 },
    { id: "UNM", name: "Ulysse Nardin Marine", price: 94077, inStock: 0, img: "/imgs/Ulysse.webp", desc: "Мужские, классические, автоматические наручные часы Zenith Chronomaster Revival El Primero A384 Revival 37 mm", new: false, discount: 30 },
    { id: "ZC", name: "Zenith Chronomaster", price: 33525, inStock: 16, img: "/imgs/Zenith.webp", desc: "Мужские, спортивные, автоматические наручные часы Ulysse Nardin Chronometer Torpilleur 42 mm", new: false, discount: 25 },
  ];


  sort(byWhat) {
    let direction = this.sorted[byWhat] ? 1 : -1,
      goodsCopy = [...this.goods].sort(function (a, b) {
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

  table() {
    let stringNumber = 0;
    return this.state.array.map((item) => {
      let inStockStyle = {};
      if (+item.inStock < 15) inStockStyle = { background: "yellow", color:"Black" };
      if (+item.inStock === 0) inStockStyle = { background: "red", color:"black" };
      return (
        <tr key={item.id}>
          <td >{++stringNumber}</td>
          <td >{item.name}</td>
          <td><img src={item.img} style={{width: "30px"}} alt=""/></td>
          <td >{item.price}BYN</td>
          <td style={Object.assign({},inStockStyle)}>
            {item.inStock}
          </td>
          <td>{item.discount}%</td>
          <td>{String(item.new)}</td>
        </tr>
      );
    });
  }
  head = [
    <tr class="tableNameRow">
      <td class="tableName">№</td>
      <td class="tableName">
        <button onClick={() => this.sort("name")}>Name</button>
      </td>
      <td class="tableName">
        <h5 >Picture</h5>
      </td>
      <td class="tableName">
        <button onClick={() => this.sort("price")}>Price</button>
      </td>
      <td class="tableName">
        <button onClick={() => this.sort("inStock")}>In Stock</button>
      </td>
      <td class="tableName">
        <button onClick={() => this.sort("discount")}>Discount</button>
      </td>
      <td class="tableName">
        <h5>Новинки</h5>
      </td>
    </tr>,
  ];
  render() {
    return (
      <table className="table">
        {this.head}
        {this.table()}
      </table>
    );
  }
}
