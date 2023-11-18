import { Todo } from "./components/Todo";

export default function App() {
  return (
    <div style={{
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }} >
      <Todo />
    </div>
  )
}