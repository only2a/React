import React from "react";
import "./Calendar.css"

export class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), selectedDays: [] };
  }
  changeDate = (value) => {
    this.setState({ date: value });
  };
  selectDays = (day) => {
    for (let i = 0; i < this.state.selectedDays.length; i++) {
      if (
        day.getDate() === this.state.selectedDays[i].getDate() &&
        day.getMonth() === this.state.selectedDays[i].getMonth() &&
        day.getFullYear() === this.state.selectedDays[i].getFullYear()
      )
        return this.setState(({ selectedDays }) => ({
          selectedDays: [
            ...selectedDays.slice(0, i),
            ...selectedDays.slice(i + 1),
          ],
        }));
    }
    this.setState(({ selectedDays }) => ({
      selectedDays: [...selectedDays, day],
    }));
  };
  render() {
    return (
      <>
        <CalendarHead changeDate={this.changeDate} />
        <CalendarBody
          date={this.state.date}
          selectDays={this.selectDays}
          selectedDays={this.state.selectedDays}
        />
      </>
    );
  }
}

class CalendarHead extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  monthNames = [
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
  ];
  prevMonth = () => {
    let date = new Date(
      this.state.date.getFullYear(),
      this.state.date.getMonth() - 1
    );
    this.setState({ date }, () => this.props.changeDate(this.state.date));
  };
  nextMonth = () => {
    let date = new Date(
      this.state.date.getFullYear(),
      this.state.date.getMonth() + 1
    );
    this.setState({ date }, () => this.props.changeDate(this.state.date));
  };
  render() {
    return (
      <>
      <div class="calendarHeader">
        {this.monthNames[this.state.date.getMonth()]} {this.state.date.getFullYear()}
        <span class="buttonGroup">
        <button onClick={this.prevMonth}>{"<"}</button>
        <button onClick={this.nextMonth}>{">"}</button>
        </span>
      </div>
      </>
    );
  }
}

class CalendarBody extends React.Component {
  dayNames = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  currentDate = new Date(); // today
  startDay(date) {
    let startDay;
    date.getDay() === 0 ? (startDay = 6) : (startDay = date.getDay() - 1);
    return startDay;
  }
  oneMonth(date) {
    let fullMonth = [],
      day = 1 - this.startDay(date),
      month = date.getMonth(),
      year = date.getFullYear();
    for (let i = 0; i < 6; i++) {
      // weeks
      fullMonth[i] = [];
      for (let j = 0; j < 7; j++) {
        // days
        fullMonth[i][j] = new Date(year, month, day++);
      }
    }
    return fullMonth;
  }
  styleTd = (wdate, currentDate, date, selectedDays) => {
    if (date.getMonth() !== wdate.getMonth()) //не входит
      return { color: "#dfdfdf" };
      //выбранный
    for (let i = 0; i < selectedDays.length; i++) {
      if (
        selectedDays[i].getDate() === wdate.getDate() &&
        selectedDays[i].getMonth() === wdate.getMonth() &&
        selectedDays[i].getFullYear() === wdate.getFullYear()
      )
        return { background: "#B6CDF0" };
    }
    //текущий
    if (
      wdate.getDate() === currentDate.getDate() &&
      wdate.getMonth() === currentDate.getMonth() &&
      wdate.getFullYear() === currentDate.getFullYear()
    )
      return { background: "#D89FEE" };
  };
  selectDays = (wdate) => {
    this.setState({}, () => this.props.selectDays(wdate));
  };
  render() {
    const date = new Date(
        this.props.date.getFullYear(),
        this.props.date.getMonth(),
        1
      ), // first day of current month
      selectedDays = this.props.selectedDays;
    return (
      <table class="calendarTable">
        <thead>
          <tr>
            {this.dayNames.map((name) => (
              <td key={name}>{name}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.oneMonth(date).map((week, index) => (
            <tr key={index}>
              {week.map((wdate, index) => (
                <td
                  key={index}
                  style={this.styleTd(
                    wdate,
                    this.currentDate,
                    date,
                    selectedDays
                  )}
                  onClick={() => {
                    if (date.getMonth() === wdate.getMonth())
                      this.selectDays(wdate);
                  }}
                >
                  {wdate.getDate()}
                </td> // wdate === fullMonth[i][j]
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
