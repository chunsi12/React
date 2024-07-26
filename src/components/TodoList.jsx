import { useState } from "react";
const TodoList = () => {
    const [todos, setTodos]= useState([]);
    const [newTodo, setNewTodo] = useState("");
    //이벤트 발생시마다 newtodo에 저장
    const handleInputChange = (e) => {setNewTodo(e.target.value);};
    //add버튼 클릭시 todos에 추가
    const handleAddTodo = () =>{
        if(newTodo.trim() !== "")
            setTodos([...todos, newTodo]);
            setNewTodo("");
    }
    //삭제 : 인덱스 번호 받아서 해당 인덱스가 아닌 요소만 남겨서 새로운 배열생성->setTodos
    const handleDeleteDodo = (index)=>{
        const newTodos = todos.filter((_, i)=>i !== index );
        setTodos(newTodos);
    }

return (
    <div className='todo-list'>
        <h1>To-Do List</h1>
        <input type="text" placeholder="Add a new task" value={newTodo}
        onChange={handleInputChange}/>

        <button onClick={handleAddTodo}>Add</button>
        <ul>
            {todos.map((todo, index)=>{
             return( <li key={index}>
                    {todo}
               <button onClick={()=>handleDeleteDodo(index)}>Delete</button>
                </li>
             );
              })}
        </ul>

    </div>
  );
}

export default TodoList;