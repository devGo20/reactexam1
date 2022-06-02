const OddEvenResult = ({ count }) => {
    return <>{count % 2 === 0 ? "Odd":"Even"}</>
}
// 부모가 내려준 props가 변경될 경우 다시 rerender
// 부모 요소가 rerender되면 자식 요소도 rerender
export default OddEvenResult;