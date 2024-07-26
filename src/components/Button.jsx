
const Button = ({text, color="blue",a, children}) => {
    //console.log(props);

    const onClickButton = (e) =>{
        console.log(e);
        alert(text);
    }
    return <button style={{color: color}} onClick={onClickButton}>
        {text}-{color.toUpperCase()} -{a}
        {children} 
        </button>

}
//Button.defaultProps = {
//    color: "black"
//}
const Button1 = ({text, color="blue"}) => {
    //console.log(props);

    const onClickButton = () =>{
        alert("text");
    }

    return <button style={{color: color}} onClick={onClickButton} >
        { text }
       
        </button>

}
//export default Button;
export {Button, Button1};

