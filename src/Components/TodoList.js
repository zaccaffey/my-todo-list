import TodoItem from "./TodoItem"
const TodoList = (props) => {
    return (
        <div>
            {props.list.map(todo => (
                <TodoItem title={todo.title} description={todo.description}></TodoItem>
            ))}
        </div>
    )
}

export default TodoList