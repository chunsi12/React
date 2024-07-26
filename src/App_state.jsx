import './App.css'
import { useState } from 'react'
import Bulb from './components/Bulb';
import Count from './components/Counter';

function App() {
  //인자값 2개를 반환하는 함수 (스테이트상태, 스태이트 함수)
//const state = useState(0);
//console.log(state)
//const [count, setState] = useState(0);
//const [light, setLight] = useState("OFF");
//const[count, setCount] = useState(0);

  return (
    //state값을 할당받아서 버튼 클릭시 스태이트 함수를 호출하여 1씩 증가하는 리랜더링
    <>
    <Bulb/>
    <Count/>
    
     </>
  )
}

export default App
