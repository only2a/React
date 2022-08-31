import React from "react";
import "./Catalog.css";
export class Search extends React.Component {
  onChange = (e) => {
    this.setState(() => this.props.search(e.target.value));
  };
  onClick = (target) => {
    this.setState(() => this.props.searchParameter(target));
  };
  render() {
    return (
      <div className="search">
        <input id="inp2" type="search" placeholder="Search..." onChange={this.onChange} /><br/>
        <div className="inner">
            <label className="SearcLabel">
              <input
                type="radio"
                id="partial"
                name="search"
                defaultChecked
                onClick={this.onClick.bind(this, "partial")}
              />
              partial match
            </label> <br/>
            <label className="SearcLabel">
              <input
                type="radio"
                id="full"
                name="search"
                onClick={this.onClick.bind(this, "full")}
              />
              full match
            </label>
        </div>
      </div>
    );
  }
}
