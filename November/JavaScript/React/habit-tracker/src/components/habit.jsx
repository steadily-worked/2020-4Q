import React, { Component } from 'react';

class Habit extends Component {
    // state = {
    //     count: 0,
    // };
    // habit이 추가되고 난 후엔 state가 필요가 없게 된다.
    handleIncrement = () => {
        // // state 오브젝트 안에 있는 count를 증가한 뒤 state를 업데이트한다.
        // this.setState({ count: this.state.count + 1 });
        // // 전체적인 state에 대한 명령을 줘야 React가 알아차린다!
        // // this.state.count ++; 라든지 this.state.count += 1 이런식으로 쓰면 안된다는 뜻임!
        // 위 4줄은, habit을 넣기 전 코드이다.
        this.props.onIncrement(this.props.habit);
    };
    handleDecrement = () => {
        // const count = this.state.count - 1;
        // this.setState({ count: count < 0 ? 0 : count })
        // 위 2줄은, habit을 넣기 전 코드이다.
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    render() {
        const { name, count } = this.props.habit;
        return (
        <li className='habit'>
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
        className='habit-button habit-increase'
        onClick={this.handleIncrement}>
            <i className="fas fa-plus-square"></i>
        </button>
        <button
        className='habit-button habit-decrease'
        onClick={this.handleDecrement}>
            <i className="fas fa-minus-square"></i>
        </button>
        <button
        className='habit-button habit-delete'
        // onClick={() => {
        //     this.props.onDelete(this.props.habit);
        //     }} // 해당 function이 계속 실행 되는 것을 막고싶다면
        onClick={this.handleDelete} // this.handleDelete로 연결해준 후 handleDecrement() 아래에 handleDelete()를 선언해주면 된다.
        >
            <i className="fas fa-trash"></i>
        </button>
        </li>
        );
    }
}

export default Habit;

//19행 추가 이후에 +- 기능이 제대로 되지 않는 이유는, 우리가 habit에서 props를 전달해서 우리가 props를 표기하게 되는데,
// (19행을 통해) 여기에서 증가한, 내부적으로 쓰이는 State는 더이상 쓰이고 있지 않게 된다. 그래서 안되는 것.
// data가 habits.jsx의 state 내에 있는 habits에 리스트 형태로 존재하고 있기 때문에 그것을 가능케 하는 로직 또한
// state 내에 있어야 한다.


// 작은 컴포넌트 안에 자체적으로 state가 들어있는 경우가 있는데, 만약 이state가 공통적으로 사용되는 부분이 있다면
// state를 상위 컴포넌트로 갖고 나오고 부모 컴포넌트에서 해당하는 데이터를 props로 전달해주면 된다. 그리고 데이터 업뎃을 위해선
// prop으로 전달된 callback 함수를 이용해서 실제로 데이터를 갖고 있는 부모 component에서 처리가 되도록 만든 것임. 이게 state와 Props의 차이
// state는 컴포넌트가 자체적으로 갖고 있는 데이터이고, props는 외부에서 전달받은 데이터이다. 