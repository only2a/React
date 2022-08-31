import React from 'react';

const Task_1 = () => {
  

    

    class Clock extends React.Component {
        constructor(props) {
            super(props);
            this.state = {date: new Date()};
            this.format=props.format;
           this.timeZone=parseFloat(props.timeZone);
        }
        componentDidMount() {
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        }

        componentWillUnmount() {
            clearInterval(this.timerID);
        }

        tick() {
            this.setState({
                date: new Date()
            });
        }
        myFunction() {

            var date = new Date();

            var hours = date.getHours();

            var minutes = date.getMinutes();

            var newformat = hours >= 12 ? 'PM' : 'AM'; 

            hours = hours % 12; 

            hours = hours ? hours : 12; 

            minutes = minutes < 10 ? '0' + minutes : minutes;

           return <h2>{hours}:{minutes} {newformat}</h2> 
        }
        check(){
            if(this.format==12){
               return <h3>{this.myFunction()}</h3>
            }
            
        }
        tmz(){
            if(this.timeZone!=0){
            var utc= this.state.date.getTime()+(this.state.date.getTimezoneOffset()*60000);
            
            var nd = new Date(utc + (3600000*Number(this.timeZone)));
            return <h2>TimeZone:{this.timeZone}<br></br>Time:{nd.toLocaleTimeString()}</h2>
            }
        }
        render() {
            return (
                <div>
                    <h1>Задание 1 </h1>
                    <h2>Сегодня({this.state.date.toLocaleDateString()}) Сейчас {this.state.date.toLocaleTimeString()}</h2>
                    {this.check()}
                    {this.tmz()}
                </div>
            );
        }
    }

    return <div><Clock format='12' timeZone='-5.5' /></div>

}

export default Task_1;