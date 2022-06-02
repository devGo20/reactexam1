const Container = ({children}) => { // component를 자식에게 props로 전달 가능
    return (
       <div style={{margin:20, padding:20, border: '1px solid black'}}>
           {children}
       </div>
    )
}

export default Container;