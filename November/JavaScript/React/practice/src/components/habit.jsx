import React, { Component } from "react";

class Habit extends Component {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    const { name, count } = this.props.habit;
    // props.habit으로 지정을 해줬기 때문에 더이상 기존 4-6행의 state는 사용되지 않는다.
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          // onClick={() => {
          //   this.props.onDelete(this.props.habit); // habit에 대해 onDelete를 적용(habits의 onDelete 함수 적용)
          // }}
          // render 함수는 데이터가 변경될 때마다 update됨. 즉 render함수가 계속 호출이 되는 것.
          // render 내에 함수를 넣는 것보다, render 밖 & component 안 에서 화살표함수를 만드는 것이 r
          // 화살표 함수의 경우 처음 만들어진 이후 함수에 할당되어 있기 때문에(ex) handleDecrement ) 한번만 생성이 된다.
          // render 내에서 작성한 건 render가 호출이 되어서 rerendering이 될 때마다 화살표 함수가 계속 만들어지는 불편함의 문제
          // 위와 같은 문제를 일어나지 않게 하려면 .. 아랫줄
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;

// 작은 컴포넌트 안에 자체적으로 state가 들어있는 경우가 있는데, 이 state가 여러가지에 걸쳐서 공통적으로 사용되는 부분이 있다면
// 이 state를 상위 컴포넌트로 갖고 나오고 (자식 컴포넌트에 하나하나 state처리하는 것보다 훨씬 경제적)
// 부모 컴포넌트에서 해당하는 data를 props로 전달해주면 된다. prop으로 전달된 callback 함수를 이용해서, 실제로 데이터를 갖고 있는 부모 컴포넌트에서 처리되도록 만든 것임.

// state는 컴포넌트 자체적으로 갖고 있는 데이터. props는 외부에서 전달받은 데이터임.

// state를 app으로 가져와서 app 안에 navbar 추가하고, input field, reset버튼 추가하기
// app.jsx에 App()은 function으로 되어있는데 이걸 component로 변경한 후 habit처럼 class로 변경한 후 해야함.
