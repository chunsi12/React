import { useState } from "react";

const Register = ()=> {
   const [input, setInput] = useState({
     name:"김자바",
     birth:"2024-07-03",
     country:"jp",
     bio:"자기소개"
   });
   const onChange = (e)=>{
    setInput({
        ...input,
        [e.target.name] : e.target.value,
    })
   };

    return (<div>
    <div><input name="name" value={input.name} onChange={onChange} placeholder={"이름"}/>
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
    </div>);
};

export default Register;