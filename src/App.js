import React, { useState } from 'react';
import './App.css';

function App() {

  let posts = '강남 고기 맛집';
  let styVal = { color : 'blue', fontSize : '30px' };
  function 함수() {
    return 100
  }

  let [글제목, 글제목변경] = useState('남자 코트 추천');
  let [글제목2, 글제목변경2] = useState(['자취집 추천','강남 우동 맛집']);
  // state라는 데이터 보관함을 만드는 방법
  // import useState라는 react함수를 사용하겠다는 선언
  // state 데이터(남자 코트 추천), state 데이터 변경 함수 가 변수 글제목,글제목변경에 들어가게 됨( 꼭 맞춰서 넣어줘야함 )
  // state는 변경되면 HTML이 자동으로 재랜더링이 됨
  // var [aaa, bbb] = [10 , 100];
  // ES6 destructuring 문법 array, object에 있던 자료를 변수에 쉽게 담을 수 있음
  let [names, names_state] = useState(['원주 맛집','수원 맛집','논산 맛집']);

  return (
    <div className="App">
      <div className="blank-nav">
        {/* react는 JSX문법을 사용해서 class라는 속성값 대신 className를 사용해야함 */}
        <div className={ posts } style={ { color : 'blue', fontSize : '30px' } }>개발 React Blog</div>
        <h5 style={styVal}>test</h5>
        {/* innerStyle은 중괄호 안에 오브젝트 형식으로 집어넣어야한다.
          그리고 font-size같은 - 기호가 들어가는 속성명은 카멜케이스 방식으로 치환해서 사용한다 */}
      </div>
      <h4> { posts } / { 함수() } </h4>
      {/* react에서는 데이터바인딩을 할 수 있다! 양식은 위처럼
      js 변수/함수를 중괄호 안에 넣으면 된다. */}
      {/* <img src={ logo } /> */}
      {/* img또한 import에서 선언한 이름을 jsx방식으로 넣을 수 있다!
        즉 src, id, href등의 속성에도 {}에 넣으면 된다 */}
      <div className="list">
        <h3> { 글제목 } </h3>
        <p>12월 15일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> { 글제목2[0] } </h3>
        <p>12월 15일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> { names[0] } </h3>
        <p>2021-12-15</p>
        <hr />
      </div>
      <div className="list">
        <h3> { names[1] } </h3>
        <p>2021-12-16</p>
        <hr />
      </div>
      <div className="list">
        <h3> { names[2] } </h3>
        <p>2021-12-17</p>
        <hr />
      </div>
      

    </div>
  );
}

export default App;
