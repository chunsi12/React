import { useState, useRef } from "react";


const Register = ()=> {
   const [input, setInput] = useState({
     name:"김자바",
     birth:"2024-07-03",
     country:"jp",
     bio:"자기소개"
   });
{/*   const refObj = useRef(0);
   let count = 0;
   console.log(refObj.current);
   console.log("Register-렌더링")
   console.log("count :"+count);
   count++;
   console.log("count++ :"+count);
   */}
   const countRef = useRef(0);
   const inputRef = useRef();

   const onChange = (e)=>{
    countRef.current++;
    console.log(countRef.current);
    console.log(e.target.name+ " : " + e.target.value);
    setInput({
        ...input,
        [e.target.name] : e.target.value,
    })
   };

   const onSubmit = () =>{
    if(input.name === ""){
       console.log(inputRef.current);
       inputRef.current.focus();
    }
   }

    return (<div>
    { /*   <button onClick={()=>{refObj.current++; console.log(refObj.current);}}>
          ref+1
        </button> */}
   
    <div> 
        <input ref={inputRef}
         name="name" value={input.name} onChange={onChange} placeholder={"이름"}/>
     {input.name}
    </div>
    <div><input name="birth" value={input.birth} onChange={onChange} type="date" />
    {input.birth}
    </div>
    <div>
        <select name="country" onChange={onChange} value={input.country}>
            <option value="">선택하세요</option>
            <option value="kr">대한민국</option>
            <option value="jp">일본</option>
            <option value="us">미국</option>
        </select>
    </div>
    <div>
        <textarea name="bio" onChange={onChange} cols="50" rows="3" value={input.bio}></textarea>
    </div>
    <button onClick={onSubmit}>제출</button>

    </div>);
   
};

export default Register;