import React from 'react';
import './app.css';
import Habit from './components/habit';

function App() {
  return <Habit />;
}

export default App;






  // const name = 'steadily-worked';
  // return (
  //   <React.Fragment>

  // <h2>Hello!</h2>
  //   {name && <h1>Hello! {name}:)</h1>}
  //   {['😎','🤔'].map(item => <h1>{item}</h1>)};
  //   </React.Fragment>
  // );
  // 이것이 바로 JSX임.
  // JSX가 없어서 React 자체의 코드만 써야 했을 때 return React.createElement('h1', {}, 'Hello:)'); 이런식으로 해야 했음. 
  // 위 코드가 JSX를 통해 <h1><Hello:)/h1>이 된 것.
  // 차이점이라고 한다면, HTML에선 h1 class='title'이지만, JSX에선 h1 className='title'으로 써야 한다는 것.
  // 전체를 감싸는 태그는 없고, <React.Fragment>를 해줘야 한다. <div>를 하면 기존 root div에 또 div를 만들게 되어 불필요한 div가 생긴다.
  // <React.Fragment>대신 <>를 해줘도 되고, <React.fr>로 해줘도 된다. <ol>, <ul>등 의미있는 태그를 쓸 땐 당연히
  // 그 태그를 써줘야 한다. 
  
  // 그리고, JSX 안에서는, JavaScript 코드 작성이 가능하다. {} 안에다가 코드를 작성하면 된다.
  // {name && <h1>Hello! {name}:)</h1>}은, name이 있다면 <h1>Hello! {name}:)</h1> 를 수행하라는 것이다.
  // {['😎','🤔'].map(item => <h1>{item}</h1>)};은, [] 내에 순환할 것들을 적고, .map으로 (item이 있을 경우 => <h1>{item}</h1>을 출력) 하게하는 명령이다.

