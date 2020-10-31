## React

- React는 UI를 쉽고 재밌게 만들 수 있게 도와주는 라이브러리이다. fb에서 만들어진 이후로 강력한 커뮤니티가 형성되어 있기 때문에 문제 해결에 좋다.
- React를 이용하면 웹어플리케이션을 만들 수 있고, ~네이티브 를 이용해 모바일 어플리케이션도 만들 수 있다.
- 배우기도 쉽고 개발할 때도 재밌게 할 수 있어서 좋음 ! 포트폴리오를 리액트 프로젝트로 채우면 취업할 때 많은 도움이 될 것임.
- A library for creating User Interface. (= components로 이루어진 UI 라이브러리)

- 컴포넌트 : 한가지의 기능을 수행하는 UI 단위 (독립적, 잘 고립돼 있음, 재사용 가능)
ex) Root 컴포넌트 안에 Navbar, Content 컴포넌트가 있고, Navbar 컴포넌트 안에는 [Logo, Button, Button] 이렇게 세 개의 컴포넌트가, Content 컴포넌트 안에는 [Article, Article, Article] 이렇게 세 개의 컴포넌트가 있다. 이렇게 각각 Tree 형식으로 이루어져 있음.
- 분석할 때 컴포넌트 단위로(박스 단위로) 구분하는 것이 필요하다.
- 재사용이 가능하고, 독립적인 단위로 나누는 것이 중요하다. 너무 작은 컴포넌트 단위로 나눌 필요는 없다.
- 기본적인 컴포넌트의 형태는 이러하다.
```js
import React from 'react';
class LikeButton extends Component {
    state = {
        numberOfLikes: 0, State
    }; // 여기까지가 State 부분
    render() {
        return <button>
          {this.state.numberOfLikes}
        </button>;
    } // 여기까지가 Render 부분
}
export default LikeButton;
```
- State는 컴포넌트에 들어있는 데이터를 나타내는 오브젝트이고, Render는 어떻게 사용자에게 표기될 것인지를 표시하는, JSX의 형태이다.
- 만약 제일 상위에 있는 Root 컴포넌트의 State의 내용이 변경되면, 그 아래의 Navbar와 Content의 Render함수가 호출되고, 이 안에 자식 요소의 Component가 들어 있다면, 그 자식 요소들의 Render함수 또한 전부 호출된다.

- React만의 Virtual DOM Tree가 있는데, 컴포넌트의 변동사항이 생겨서 자식 컴포넌트의 Render 함수가 호출이 되는 경우 이전의 Virtual DOM Tree와 비교해서 실질적으로 어떤 부분이 업데이트 돼야하는지 계산한 후에 정말 필요한 부분만 DOM Tree에 업데이트한다. 그래서, Render함수가 많이 호출이 되어도 실질적으로 보여지는 데이터가 변동되지 않으면 DOM Tree에는 전혀 영향을 주지 않는다. 그래서 Render 함수가 많이 호출되어도 걱정하지 않아도 된다.
- 또 한가지 중요한 특징은, React는 데이터가 변경이 될 때마다 어플리케이션 전체를 다시 Rendering한다는 것, 그리고 그것이 React로 어플리케이션을 만드는 것을 정말 쉽고 재밌게 만들어 줄 수 있는 이유 중 하나이다. State에 맞게 Render함수에서 어떻게 표기될 것인지 한 번만 정의해 두면 React가 모든 것을 알아서 한다. 상태가 변하면 알아서 다시 Render 함수를 호출한다. 이렇게 쉽게 개발하면서도 성능을 걱정하지 않아도 되는, React가 빠른 이유는, React 내부에서 가상의 DOM Tree를 메모리에 보관해 놓고 있기 때문에 업데이트가 일어났을 때 이전의 DOM Tree와 비교해서 바뀐 게 있을 때만 업데이트를 한다. 업데이트 해야되는 내용을 모았다가 한번에 같이 하므로, 정말 빠르게 성능을 보장할 수 있다.