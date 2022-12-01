import Card from "../UI/Card"
const TodoItem = (props) => {
    return (
        <div>
            <Card>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </Card>
        </div>
    )
}

export default TodoItem