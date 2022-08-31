import React from 'react'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class OrderForm extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" exact element={<FirstPage/>}/>
                    <Route path="/secondPage" element={<SecondPage/>} />
                    <Route path="/thirdPage" element={<ThirdPage/>} />
                </Routes>
            </Router>
        )
    }
}
export default OrderForm