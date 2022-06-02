import React, {useState} from 'react';
import OddEvenResult from './OddEvenResult';

const Counter = ( {initialValue }) => { // 비구조할당으로 props 객체 중 initialValue만 받음
    // 0에서 출발, 1씩 증가 or 감소
    // const [count, setCount] = useState(0); // 0이 초기값이 됨
    const [count, setCount] = useState(initialValue); // props 점 표기법으로 접근
    // state는 상태가 변화하면 컴포넌트를 rerender함
    // 화면에 나타나는 데이터를 쉽게 교체하고 업데이트 할 수 있게 도와줌

    const onIncrease = () => {
        setCount(count + 1);
    }
    const onDecrease = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count={count} />
        </div>

    )
};

// 부모 컴포넌트에서 받은 initialValue가 없을 경우(전달 받지 못한 값이 있을 경우
// defaultValue 설정으로 에러 방지
Counter.defaultProps = {
    initialValue: 0,
};

export default Counter;