import "./App.css";
import { Routes, Route } from "react-router-dom";
import TodoApp from "./Pages/TodoApp";
import { TodoList } from "./Pages/TodoList";
import EditTodo from "./Pages/EditTodo";
import TodoDetails from "./Pages/TodoDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/todo/" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetails />} />
        <Route path="/todo/:id/edit" element={<EditTodo />} />
      </Routes>
    </div>
  );
}

export default App;
