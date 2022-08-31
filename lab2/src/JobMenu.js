import { Component } from "react";

export class SelectJob extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.selected = this.selected.bind(this);
  }
  jobs = [
    { value: "", name: "Выберите" },
    { value: "Programmer", name: "Программист" },
    { value: "Manager", name: "Менеджер" },
    { value: "Worker", name: "Рабочий" },
    { value: "Doctor", name: "Доктор" },
    { value: "Driver", name: "Водитель" },
  ];
  selected(el) {
    return this.setState({ value: el.target.value });
  }
  render() {
    return (
      <>
        <select style={{margin:'auto', display:'flex'}} onChange={this.selected}>
          {this.jobs.map((item) => {
            return <option value={item.value}>{item.name}</option>;
          })}
        </select>
        <JobMenu value={this.state.value} />
      </>
    );
  }
}

class JobMenu extends Component {
  switchCase() {
    let links = [],
      value = this.props.value;

    switch (value) {
      case "Programmer":
        links.push("linkForProgrammer", "linkForProgrammer", "linkForProgrammer", "linkForProgrammer", "linkForProgrammer");
        break;
      case "Manager":
        links.push("linkForManager", "linkForManager", "linkForManager", "linkForManager", "linkForManager");
        break;
      case "Worker":
        links.push("linkForWorker", "linkForWorker", "linkForWorker", "linkForWorker", "linkForWorker");
        break;
      case "Doctor":
        links.push("linkForDoctor", "linkForDoctor", "linkForDoctor", "linkForDoctor", "linkForDoctor");
        break;
      case "Driver":
        links.push("linkForDriver", "linkForDriver", "linkForDriver", "linkForDriver", "linkForDriver");
        break;
    }
    console.log(links);
    return (
      <>
        <h2>Меню</h2>
        <ul style={{display:'flex',listStyleType:'none'}}>
          {links.map((item) => {
            return (
              <li style={{padding: '15px'}}><a href="#">{item}</a></li>
            );
          })}
        </ul>
      </>
    );
  }

  render() {
    return <>{this.switchCase()}</>;
  }
}
