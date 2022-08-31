import { Component } from "react";
import "./SortTable.css";

export class SortTable extends Component {
  constructor(props) {
    super(props);
    this.sorted = { name: true, price: true, inStock: true };
    this.state = { array: this.goods };
  }
  goods = [
    { id: "Milk", name: "Milk", price: 0.8, inStock: 0 },
    { id: "Butter", name: "Butter", price: 1.3, inStock: 13 },
    { id: "Coffee", name: "Coffee", price: 12, inStock: 23 },
    { id: "Tea", name: "Tea", price: 13, inStock: 2 },
    { id: "Sugar", name: "Sugar", price: 1.2, inStock: 4 },
    { id: "Apples", name: "Apples", price: 1, inStock: 16 },
    { id: "Cheese", name: "Cheese", price: 10, inStock: 9 },
  ];
  sort(byWhat) {
    let direction = this.sorted[byWhat] ? 1 : -1,
      goodsCopy = [...this.goods].sort(function (a, b) {
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
      if (+item.inStock < 3) inStockStyle = { background: "yellow" };
      if (+item.inStock === 0) inStockStyle = { background: "red" };
      return (
        <tr key={item.id}>
          <td >{++stringNumber}</td>
          <td >{item.name}</td>
          <td >${item.price}</td>
          <td style={Object.assign({},inStockStyle)}>
            {item.inStock}
          </td>
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
        <button onClick={() => this.sort("price")}>Price</button>
      </td>
      <td class="tableName">
        <button onClick={() => this.sort("inStock")}>In Stock</button>
      </td>
    </tr>,
  ];
  render() {
    return (
      <table>
        {this.head}
        {this.table()}
      </table>
    );
  }
}
