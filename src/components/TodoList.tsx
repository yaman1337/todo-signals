import { removeTodo, todoList } from "../provider/todos/todos"

export const TodoList = () => {
  return (
    <ul style={{overflow: "scroll"}}>
       {
        todoList.value.map((todo, i) => (
            <li key={i} style={{
                borderBottom: "1px solid black",
                padding: 5
            }}>
                {todo}

                <button onClick={() => removeTodo(todo)} >delete</button>
            </li>
        ))
       }
    </ul>
  )
}
