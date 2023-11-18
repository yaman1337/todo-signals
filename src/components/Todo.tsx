import { TodoInput } from "./TodoInput"
import { TodoList } from "./TodoList"

export const Todo = () => {
  return (
    <div style={{
        height: 400,
        width: 400,
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "10px"
    }} >
        <TodoInput />
        <TodoList />
    </div>
  )
}
