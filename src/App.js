// import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';
import Container from './Container';

function App() {
  let name = "go"

  const style = {
    App: {
      // backgroundColor:'black',
    },
    h2:{
      color:'red'
    },
    bold_text:{
      color:'green',
    }
  }

  const fun = () => {
    return 'fun';
  }

  const number = 5;

  // 자식 컴포넌트에 전달할 값이 많을 경우 객체로 만들어서 전달
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    initialValue: 5,
  }
  return (
    <Container>
      <div>
        <MyHeader/>
        <header className="App-header">
          <h2 style={style.h2}>안녕 리액트 {name}</h2>
          <b id="bold_text" style={style.bold_text}>React.js {fun()} </b>
          <p>{number}는 : {number % 2 === 0 ? '짝수' : '홀수'}</p> // 삼항 연산자
          <Counter {...counterProps} /> spread 연산자를 사용하여 객체 전달하기
        </header>
        <MyFooter />
      </div>
    </Container>
  );
}

export default App;
