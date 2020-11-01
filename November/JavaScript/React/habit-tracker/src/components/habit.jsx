import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count: 0,
    };

    handleIncrement = () => {
        // state 오브젝트 안에 있는 count를 증가한뒤 state를 업데이트해야 됨.
        this.setState({count: this.state.count + 1});
        // 전체적인 state에 대한 명령을 줘야 React가 알아차린다!
        // this.state.count ++; 라든지 this.state.count += 1 이런식으로 쓰면 안된다는 뜻임!
    };

    handleDecrement = () => {
        const count = this.state.count - 1;
        this.setState({count: count < 0 ? 0 : count});
    };

    render() {
        console.log(this.props.habit);
        const { name, count } = this.props.habit;
        return (
            <li className='habit'>
              <span className="habit-name">{name}</span>
              <span className="habit-count">{count}</span>
              <button
              className='habit-button habit-increase'
              onClick={this.handleIncrement}>
                  <i className='fas fa-plus-square'></i>
              </button>
              <button
              className='habit-button habit-decrease'
              onClick={this.handleDecrement}>
                  <i className='fas fa-minus-square'></i>
              </button>
              <button className='habit-button habit-delete'>
                  <i className='fas fa-trash'></i>
              </button>
            </li>
        );
    }
}

export default Habit;