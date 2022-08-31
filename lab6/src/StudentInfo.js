import React from "react";

export class StudentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FIO: "Aaaaaaa Bbbbbb Ccccccc",
      birthDate: "15.12.2002",
      uniYear: "2020",
      faculty: "IT",
      group: "6",
      speciality: "POIT",
      email: "abcd@mail.ru",
      phoneNumber: "80339900987",
    };
  }
  render() {
      return(
          this.props.render(this.state)
      )
  }
}
