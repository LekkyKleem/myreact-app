import { useState, useEffect } from "react";
import Hello from "./Hello";
import Counter from "./Counter";
import TodoList from "./TodoList";
import Form from "./Form";
import Weather from "./Weather";
import "./styles.css";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  // Функция переключения состояния задачи (завершена / не завершена)
  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="app">
      <h1>Привет, React!</h1>
      <Hello />
      <Counter />

      {isLoading ? <p>Загрузка...</p> : <TodoList todos={todos} toggleTodo={toggleTodo} />}

      <h1>Форма регистрации</h1>
      <Form />

      <h1>Погода В Петропавловске</h1>
      <Weather />
    </div>
  );
}

export default App;
