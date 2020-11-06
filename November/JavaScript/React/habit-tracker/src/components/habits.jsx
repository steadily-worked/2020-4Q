import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            { id: 1, name: 'Reading', count: 0 },
            { id: 2, name: 'Running', count: 0 },
            { id: 3, name: 'Coding', count: 0 },
        ],
    };
    handleIncrement = habit => {
        // this.state.habits[index].count++; 가 안되는 이유는, 이렇게 부분적으로 변경해주면 모르기 때문..
        const habits = [...this.state.habits]; // state에 있는 habits의 오브젝트를 그대로 복사해서 habits const로 할당(새로운 배열)
        const index = habits.indexOf(habit); // 배열에서 몇 번째에 있는지 물어보는 const
        habits[index].count++; // index번째에 있는 habits의 카운트를 1 증가
        // 그러니까 .. 14행을 통해 habits의 오브젝트를 그대로 가져온다. (그 이유는, 부분적으로만 변경하면 React가 이를 인지하지 못한다. 그래서 전체적으로 state를 업뎃해야함.)
        // 그리고 indexOf(habit)으로 habit의 위치를 파악하는 index 상수를 만든다.
        // 그 이후에, habits 내의 index번째의 카운트를 1 증가시킨다.
        // habits가 10개 정도가 있다고 할 때, 첫 번째를 증가시키는 버튼을 한 번 누를 경우 index[0]의 count가 1이 증가되는 것.
        this.setState({ habits });
        // 바꿔주고 난 후 setState를 통해 habits 전체를 업데이트 해줘야 React에서 인식한다. 부분적으로 변경하면 React는 모른다.
    };
    handleDecrement = habit => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count; // count - 한 값이 0보다 작으면 0을 쓰고 아니면 계산한 새로운 count를 할당
        this.setState({ habits });
    };
    
    handleDelete = habit => {
        const habits = this.state.habits.filter(item => item.id !== habit.id); // 새로운 배열을 만드는데, this.state.habits을 빙글빙글 돌면서, (habit이 전달되면(item) item의 id와 habit의 id가 다른 경우만 가져오기)
        this.setState({ habits }); // 전달된 habit의 id가 아닌 것들만(즉 32행의 habit만) 빼놓고 복사해서 habits로 지정 후 그것만 state를 habit으로 지정.

    };

    render() {
        return (
          <ul>
            {this.state.habits.map(habit => (
                // <Habit key={habit.id} habit={habit} /> // habit이라는(등호왼쪽) property 안에 각각의 {Habit}을 전달.
                // 윗줄은 habit을 넣기 전 코드임.
                <Habit
                key={habit.id}
                habit={habit}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete} />
            ))}
          </ul>
        );
    }
}

export default Habits;

