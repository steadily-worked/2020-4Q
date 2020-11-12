import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };
  // app에 컴포넌트를 만든 후 state와 함수들을 다 app.jsx로 옮겼다. 그 이후에 위처럼 간단하게
  // this.props.~로 나타냈다.
  render() {
    return (
      <ul>
        {this.props.habits.map((
          habit // prop에 전달된 습관들의 배열을 빙글빙글 돌음. (state가 없어졌으므로 props로 바꿔준 것)
        ) => (
          // <Habit key={habit.id} habit={habit} /> // habit이라는(등호왼쪽) property 안에 각각의 {Habit}을 전달.
          // 윗줄은 habit을 넣기 전 코드임.
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
