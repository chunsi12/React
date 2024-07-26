import "./TodoItem.css";

const TodoItem = ({
    id,
    isDone,
    content,
    date,
    onUpdate,
    onDelete
}) => {
    const onChangeCheckbox = () => {
        onUpdate(id); //updates 넘겨받음
    };
    const onClickDelete = () =>{
        onDelete(id); //delte 넘겨받음
    };
    return (
        <div className="TodoItem">
            <input onChange={onChangeCheckbox}
            readOnly checked={isDone}
            type="checkbox"/>
            <div className="content">{content}</div>
            <div className="date">
                {new Date(date).toLocaleDateString()}
            </div>
            <button onClick={onClickDelete}>삭제</button>
        </div>
    );
};
export default TodoItem;