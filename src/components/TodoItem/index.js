import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {title, id} = todoItem

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-list-container">
      <p className="todo-title">{title}</p>
      <button type="button" className="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
