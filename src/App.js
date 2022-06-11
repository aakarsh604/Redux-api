import "./App.css";
import { Routes, Route } from "react-router-dom";
import TodoApp from "./Pages/TodoApp";
import { TodoList } from "./Pages/TodoList";
import EditTodo from "./Pages/EditTodo";
import TodoDetails from "./Pages/TodoDetails";
import Navbar from "./Pages/Navbar";
import Login from "./Pages/Login";
import RequireAuth from "./Hoc/RequireAuth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <TodoApp />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/todo/" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetails />} />
        <Route path="/todo/:id/edit" element={<EditTodo />} />
      </Routes>
    </div>
  );
}

export default App;
