import React from 'react';
import "./SignUpForm.css";

export class SignInForm extends React.Component {
    onChangeHandler(e) {

    }
    render() {
        return (
            <div className="sign_in">
                <input id='inp' type="text" className="email" onChange={() => this.onChangeHandler} />
                <input id='inp' type="password" className="password" onChange={() => this.onChangeHandler} />
            </div>
        )
    }
}