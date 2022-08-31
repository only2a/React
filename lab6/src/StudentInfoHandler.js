import { StudentInfo } from "./StudentInfo.js";
import React from "react";
import "./S.css";

export class StudentInfoHandler extends React.Component {
  age(student) {
    let currentDate = new Date(),
      birthDate = student.birthDate.replace(/[^0-9]+/g, ""),
      birthYear = birthDate % 10000,
      birthMonth = Math.round((birthDate / 10000) % 100),
      birthDay = Math.round(birthDate / 1000000),
      age = currentDate.getFullYear() - birthYear;
    if (currentDate.getMonth() < birthMonth - 1) age--;
    if (
      birthMonth - 1 === currentDate.getMonth() &&
      currentDate.getDate() < birthDay
    )
      age--;
    return age;
  }
  cours(student) {
    let currentDate = new Date(),
      cours = currentDate.getFullYear() - student.uniYear;
    if (currentDate.getMonth() > 8) cours++;
    if (cours > 4) cours = "Окончил университет";
    return cours;
  }
  mailOperator(student) {
    return student.email.split("@")[1];
  }
  phoneOperator(student) {
    let operators = [
        {
          name: "A1 (Velcom)",
          code: 29,
          firstNumber: [1, 3, 6, 9],
        },
        {
          name: "МТС",
          code: 29,
          firstNumber: [2, 5, 7, 8],
        },
        {
          name: "A1 (Velcom)",
          code: 44,
        },
        {
          name: "МТС",
          code: 33,
        },
        {
          name: "life :)",
          code: 25,
        },
        {
          name: "Городской",
          code: 17,
        },
      ],
      phone = student.phoneNumber,
      position,
      code,
      operator;
    if (phone[0] === "+") position = 4;
    if (phone[0] === "8") position = 2;
    code = +phone.slice(position, position + 2);

    operators.map((item) => {
      if (item.code === code && code === 29) {
        let firstNum = +phone.slice(position + 2, position + 3);
        for (let i = 0; i < item.firstNumber.length; i++) {
          if (firstNum === item.firstNumber[i]) 
          {
            return operator = item.name;
          }
        }
      }
      else if (item.code === code) 
      return operator = item.name;
    });
    return operator;
  }
  render() {
    return (
      <StudentInfo
        render={(student) => (
          <table className="tab">
              <tbody>
            <tr>
              <td id="td1">ФИО</td>
              <td id="td2">{student.FIO}</td>
            </tr>
            <tr>
              <td id="td1">Текущий возраст</td>
              <td id="td2">{this.age(student)}</td>
            </tr>
            <tr>
              <td id="td1">Факультет, курс, группа</td>
              <td id="td2">
                {student.faculty}, {this.cours(student)}, {student.group}
              </td>
            </tr>
            <tr>
              <td id="td1">Специальность</td>
              <td id="td2">{student.speciality}</td>
            </tr>
            <tr>
              <td id="td1">Электронная почта</td>
              <td id="td2">{student.email}</td>
            </tr>
            <tr>
              <td id="td1">Оператор услуг ЭП</td>
              <td id="td2">{this.mailOperator(student)}</td>
            </tr>
            <tr>
              <td id="td1">Номер телефона</td>
              <td id="td2">{student.phoneNumber}</td>
            </tr>
            <tr>
              <td id="td1">Оператор услуг МС</td>
              <td id="td2">{this.phoneOperator(student)}</td>
            </tr>
            </tbody>
          </table>
        )}
      />
    );
  }
}
