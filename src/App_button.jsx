import './App.css'
import {Button,Button1} from './components/Button'
import Header from './components/Header';

function App() {
const buttonProps = {
text:"메일",
color : "deeppink",
a : 1,
b : 2,
c : 3, 
};

  return (
    <>
      <Button {...buttonProps}>
      <div>자식 요소1</div>
      <div>자식 요소2</div>
      </Button>
      <Button text={"카페"} a="10"/>
      <Button text={"블로그"}>
    <Header />
        </Button>
        <Button1 text={"new"}/>
    </>
  )
}

export default App
