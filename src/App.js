/*  eslint-disable */
// ESLINT를 사용하지 않겠다는 표시

import React, { useState } from 'react';
import './App.css';

function App() {

  let [modal, modalChg] = useState(false);
  let [homeWorkModal, homeWorkModalChg] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  let posts = '강남 고기 맛집';
  let styVal = { color : 'blue', fontSize : '30px' };
  function 함수() {
    return 100
  }

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬에서 코딩독식']);
  // state라는 데이터 보관함을 만드는 방법
  // import useState라는 react함수를 사용하겠다는 선언
  // state 데이터(남자 코트 추천), state 데이터 변경 함수 가 변수 글제목,글제목변경에 들어가게 됨( 꼭 맞춰서 넣어줘야함 )
  // state는 변경되면 HTML이 자동으로 재랜더링이 됨
  // var [aaa, bbb] = [10 , 100];
  // ES6 destructuring 문법 array, object에 있던 자료를 변수에 쉽게 담을 수 있음
  let [names, names_state] = useState([{title:'원주 맛집',like:0},{title:'수원 맛집',like:0},{title:'서울 맛집',like:0}]);
  let [따봉, 따봉변경] = useState(0);

  let [입력값, 입력값변경] = useState('');

  // 그냥 for 반복문을 쓰고 싶다면 아래 함수처럼 사용한다.
  function 반복UI() {
    
    var 어레이 = [];
    for( var i = 0; i<3; i++) {
      어레이.push(<div>안녕</div>);
    }

    return 어레이
  }

  function 제목바꾸기() {
    //var newArray = 글제목2;
    var newArray = [...글제목]; // deep copy ES6 최신문법방식 / 위처럼 복사하지 않는 이유는 위처럼 복사하면 주소값을 공유해버리므로..
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
    //글제목변경('여자 코트 추천');
  }

  var 어레이 = [2,3,4];
  var 뉴어레이 = 어레이.map((e)=> {
    return e * 2
  });
  // 자바스크립트의 map함수는 array의 밸류 하나 하나에 데이터들을 매개변수로 받아와서 함수를 실행한다

  function nameLikeChange(idx) {
    var nameList = [...names];
    nameList[idx].like++;
    names_state(nameList);
  }

  let [newcont, newcontChg] = useState('');

  function newBlogContent() {
    var nameList = [...names];
    nameList.unshift({title:newcont, like:0}); // unshift : 배열의 가장 첫번째에 데이터를 넣는다
    names_state(nameList);
  }
  
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
      <button onClick={ 제목바꾸기 }>버튼</button> {/* react에서 onClick에서 실행할 함수에 ()를 붙이면 바로 실행을 하므로 무한반복이 되어버린다.. */}
      {/* react에서는 데이터바인딩을 할 수 있다! 양식은 위처럼
      js 변수/함수를 중괄호 안에 넣으면 된다. */}
      {/* <img src={ logo } /> */}
      {/* img또한 import에서 선언한 이름을 jsx방식으로 넣을 수 있다!
        즉 src, id, href등의 속성에도 {}에 넣으면 된다 */}
      <div className="list" onClick={ ()=>{ modalChg(!modal) }}>
        <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> { 따봉 } </h3>
        <p>2021-12-17</p>
        <hr />
      </div>
      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목} />
        : null
      }
      {/* 
        부모 컴포넌트의 state를 자식 컴포넌트에서 전송해주는 방법
        step1. props로 부모컴포넌트에서 자식컴포넌트로 전송해주기 위해서는 속성값으로 지정한속성명=부모의state명식으로 속성형식으로 넣는다
        step2. 자식컴포넌트의 매개변수로 props를 받아서 사용한다
        step3. 자식컴포넌트에서 props.지정한속성명으로 사용하면된다
      */}

      <button onClick={ ()=>{ homeWorkModalChg(!homeWorkModal) }}>또다른 모달 open</button>
      {
        homeWorkModal === true
        ? <HomeWorkModal />
        : null
      }

      {/* JSX문법 반복문 사용하는 법 :: js의 array의 map함수를 사용한다 */}
      {
        names.map((name, key)=>{
          return (
            <div key={key} className="list" >
              <h3 onClick={ ()=>{누른제목변경(key)} }> { name.title } 
                <span onClick={ ()=>{ nameLikeChange(key) } }>👍</span> { name.like } </h3>
              <p>2021-12-17</p>
              <hr />
            </div>
          )
        })
      }

      <h4>input 변수 저장방법</h4>
      <input onChange={ (e)=>{ 입력값변경(e.target.value) } }/>
      입력값 : { 입력값 }

      <h4>input을 통해 글발행</h4>
      <div className="publish">
        <input onChange={ (e)=>{newcontChg(e.target.value)}}/>
        <button onClick={ ()=>{newBlogContent()} }>전송</button>
      </div>

      <ProFile/>

      <div style={ {width:'100%',height:'200px'} }></div>
    </div>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h2>제목 {props.글제목[props.누른제목]} </h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </>
  )
}

function HomeWorkModal() {
  return (
    <>
      <div>
        <h1>모달!!! 그 상대는 모달!!!</h1>
      </div>
    </>
  )
}

// class방식의 react 개발방법
class ProFile extends React.Component {
  // class : 변수/함수를 보관하는 일종의 객체
  // extends : class [지정한class명] extends [지정한class에상속을 해줄 다른 class]

  constructor() { // class의 변수/초기갑승ㄹ 저장할때 사용
    super();
    this.state = { name : 'Kim', age : 30 } // class방식의 state 선언
  }

  changeName() { // class문법 안에서의 함수 만드는 방법
    this.setState( {age : this.state.age-1 } );
  }

  render(){
    return(
      <div>
        <h3>프로필입니다.</h3>
        <p>저는 { this.state.name } 입니다. 나이는 { this.state.age }</p>
        <button onClick={ ()=>{ this.setState( {name: 'Park'} ) }}>이름변경버튼</button>
        <button onClick={ ()=>{ this.changeName() }}>나이뺴기</button>
      </div>
    )
  }
}

export default App;
