import { saveTodo, todoInput } from "../provider/todos/todos"

export const TodoInput = () => {
  return (
    <div>
        <input type="text" placeholder="Task" value={todoInput.value} onChange={(e) =>  {
            todoInput.value = e.target.value
        }}  />
        <button onClick={() => saveTodo()}>
            Add
        </button>
    </div>
  )
}
