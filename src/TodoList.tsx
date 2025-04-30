import React, { useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <div>
      <h2>Список дел</h2>

      {/* Фильтры */}
      <div style={{ marginBottom: "10px" , display: "flex", gap: "10px" }}>
        <button onClick={() => setFilter("all")}>Все</button>
        <button onClick={() => setFilter("completed")}>Выполненные</button>
        <button onClick={() => setFilter("incomplete")}>Невыполненные</button>
      </div>

      {/* Список задач */}
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {filteredTodos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
