import React from 'react'
import PropTypes from "prop-types";
import { SignUpEmailInput } from './SignUpEmailInput'
import { SignUpPasswordInput } from '../SignUpPasswordInput'
import { PhoneInput } from './PhoneInput.js'
import "./SignUpForm.css";
import { connect } from "react-redux";
import { signUp } from "../redux/actions";
import { SignInForm } from "./SignInForm";

export class SignUpForm extends React.Component {
    state = {
        disableBtn: true, password: null, login: null, showSignUp: true, showIn: false
    }
    disableBtn = (value) => {
        this.setState({disableBtn: value})
        return this.state.disableBtn
    }
    day() {
        let days = []
        for (let day = 1; day < 32; day++) {
            days.push(
                <option key={day}>{day}</option>
            )
        }
        return (
            <select>
                {days}
            </select>
        )
    }
    month() {
        let months = [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
        ]
        return (
            <select>
                {months.map(month => {
                    return <option key={month}>{month}</option>
                })}
            </select>
        )
    }
    year() {
        let years = []
        for (let year = 1960; year < 2021; year++) {
            years.push(
                <option key={year}>{year}</option>
            )
        }
        return (
            <select>
                {years}
            </select>
        )
    }
    handleBtnClick = (e) => {
        e.preventDefault();
        this.props.signUp(this.state.login, this.state.password);
        this.setState({showSignUp: false})
      };
      logAndPass = (e, target) => {
        this.setState({[target]: e.target.value})
      };
      in = (st) => {
        if (st) return this.setState({showIn: true})
      }
    str = "выфв";
    num = Number(123);
    sym = Symbol('1');
    render() {
        return(
            <div className='MDiv'>
            {this.state.showSignUp ?
            
            <form className='login'>
                <div className='divLog'>
                    <h2>SignUpForm</h2>
                <SignUpEmailInput 
                    disableBtn={this.disableBtn} 
                    disabledBtn={this.state.disableBtn}
                    months={this.months}
                    parentState={this.state}
                    str={this.str}
                    num={this.num}
                    sym={this.sym}
                    logAndPass={this.logAndPass}
                />
                <SignUpPasswordInput disableBtn={this.disableBtn} logAndPass={this.logAndPass}/>
                <input id='inp' type="text" placeholder="Фамилия" />
                <input id='inp' type="text" placeholder="Имя" />
                <input id='inp' type="text" placeholder="Отчество" />
                <div className='divRad'>
                <label class="rad-label">
                    <input type="radio" class="rad-input" name="gender"/>
                            <div class="rad-design"></div>
                        <div class="rad-text">Муж</div>
                 </label>
                 <label class="rad-label">
                    <input type="radio" class="rad-input" name="gender"/>
                        <div class="rad-design"></div>
                        <div class="rad-text">Жен</div>
                </label>
                </div>
                <div className="date">
                {this.day()}
                {this.month()}
                {this.year()}
                </div>
                <br />
                <PhoneInput />
                <br />
                <button style={{marginTop:'10px'}} disabled={this.state.disableBtn} onClick={this.handleBtnClick}>Отправить</button>
                </div>
                </form> : !this.state.showIn ? <><SignInForm in={this.in}/> <h4>Логин или пароль пустые или неверны</h4></> : <h2 style={{marginTop:'40px'}}>Успешно авторизировались</h2>}
            </div>
        );
    }
}
const mapDispatchToProps = {
    signUp,
  };
  export default connect(null, mapDispatchToProps)(SignUpForm);

SignUpEmailInput.propTypes = {
    disableBtn: PropTypes.func,
    disabledBtn: PropTypes.bool,
    months: PropTypes.array,
    parentState: PropTypes.object,
    str: PropTypes.string,
    num: PropTypes.number,
    sym: PropTypes.symbol
  };