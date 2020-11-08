import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
    // state의 데이터를 부분적으로 update하면 React가 알아차리지 못하기 때문에 전체적으로 update 해줘야함.
  };

  handleIncrement = (habit) => {
    // this.state.habits[index].count++; 이런식으로 쓰면 안되는 이유는, 부분적으로 state 변경시 React가 인식하지 못하기 때문
    // 무엇을 증가시켜야 할지, 즉 무엇을 인자로 받아야되는지 이제 따로 정해야 함(habit에서 옮겨왔으므로)
    // 위의 6행의 habits를 업데이트 시켜줘야 함. 정확히는 count를 증가시켜 줘야겠지.
    const habits = [...this.state.habits]; // this.state.habits를 복사
    const index = habits.indexOf(habit); // habits 배열에서 habit은 몇 번째에 들어있는지
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits]; // this.state.habits를 복사
    const index = habits.indexOf(habit); // habits 배열에서 habit은 몇 번째에 들어있는지
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count; // count에서 -1 한 값이 0보다 작다면 그냥 0을 쓰고 아니면 계산한 새로운 카운트를 할당.
    // count < 0 ? -> count값이 0보다 작다면
    // count < 0 ? 0 -> count값이 0보다 작다면 0을 쓴다.
    // count < 0 ? 0 : -> count값이 0보다 작다면 0을 쓰고 '그게 아니면'
    // count < 0 ? 0 : count -> count값이 0보다 작다면 0을 쓰고 그게 아니면 count값을 그대로 쓴다.
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id); // habits를 빙글빙글 돌면서 (item이 전달이 되면 => item의 id와 habit의 id가 다른 것만) 가져와서 habits에 할당
    this.setState({ habits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            // habit에서 onClick={this.handleIncrement}를 한 것처럼 habits에서도 각각 발생시 this.handleIncrement로 연결해준 것.
            // habit.jsx의 9행을 통해 this.props.habit으로 habit을 전달하고 여기 13행에서 (habit)으로 habit.jsx에서 보낸 그 habit을 전달받음.
            // prop을 이용해서 데이터전달을 할 수 있고, callback함수도 전달할 수 있다.
          />
        ))}
      </ul>
    );
  }
  // 어떻게 UI가 표시되어지는지를 정의하는 render
}

export default Habits;
