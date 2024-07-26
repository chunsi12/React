// jsx : 자바스크립트와 HTML의 혼합코드
import "./Main.css";
const Main = () => {
    const number = 10;
    const user={
        name: '김자바',
        isLogin : true,
    }
    console.log(user)
    if(user.isLogin){
        return <div className="logout">{user.name} 로그아웃</div>;

    }else{
        return<div>로그인</div>
    }
};
export default Main;
/* 
 <h2>{number}</h2>
        <h2>{number+10}</h2>
        <h2>{number % 2 ===0 ? “짝수”:“홀수”}</h2>
*/