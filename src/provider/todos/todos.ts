import {signal, effect} from "@preact/signals-react"

export const todoInput = signal<string>("");

export const todoList = signal<string[]>([]);

effect(() => {
    todoList.value = JSON.parse(localStorage.getItem("todos") || '[]')
});


export function saveTodo() {
    if(!todoInput) return;
    todoList.value = [...todoList.value, todoInput.value ]
    localStorage.setItem("todos", JSON.stringify(todoList.value));
    todoInput.value = ""
}

export function removeTodo(value: string) {
    todoList.value = todoList.value.filter(todo => todo !== value );
    localStorage.setItem("todos", JSON.stringify(todoList.value));
}