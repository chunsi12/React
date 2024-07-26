//import { useState } from "react";
import useInput from "../hooks/useInput";

//const state = useState(); error 함수 안에서만 가능

const HookExam = () => {
   
    //여러 개의 usestate를 사용하지 못함 -> 사용자가 직접hook 구현
    //const [input, setInput] = useState("");
    //const [input, setInput2] = useState("");
    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput("");
  //  if(true){
  // const state = useState(); 조건부로 호출될수 없음
    //}
    //    const onChange = (e) => {
//     console.log(e.target.value);
//     setInput(e.target.value);
//    } 

//    const onChange2 = (e) => {
//     console.log(e.target.value);
//     setInput2(e.target.value);
//   };

    return (
        <div>
        <input value={input} onChange={onChange}/><br/>
        <input value={input2} onChange={onChange2}/>

        </div>
 );
};

export default HookExam;