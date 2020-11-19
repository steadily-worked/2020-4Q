## WEB API란 무엇인가?

- API란 Application Programming Interfaces의 약자.
- 윈도우에서 적용되는 윈도우 application을 만들고싶으면 윈도우에서 제공하는 API를 이용하면 가능하다.
- userStorage 속에 있는 login, logout API들을 이용해서 로그인, 로그아웃 로직을 구현함.

- 브라우저마다 공통적으로 제공하기로 약속한 API가 굉장히 많다.
  DOM API, Network API, Graphics API, Audio/Video API, Device API, File API, Storage API 등등..

- <a href="https://developer.mozilla.org/en-US/docs/Web/API">Mozilla API 저장소</a> 에서 현재 쓰이고 있는 다양한 API들을 확인할 수 있다.
- 일부 API는 보안에 민감한 사안이 관련되어 있기 때문에 HTTPS에서만 사용될 수 있다.

### Browser 구조 분석

- 브라우저에서 웹페이지를 열게 되면 Window가 먼저 나타남. (전체적인 창)
- Window 내에 실질적인 내용이 표기되는 부분이 Document이다.
- Window에 관련된, 브라우저 자체에 관련된 정보가 담겨져 있는 Navigator라는 오브젝트도 있다.
  window -> DOM(Document Object Model. document 등 ...), BOM(Browser Object Model. navigator, location, fetch, storage 등 ...), JavaScript가 있다.
