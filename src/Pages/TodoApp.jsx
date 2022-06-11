import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo } from "../Store/action";
import { fetchTodo } from "../Store/action";
import { TodoList } from "./TodoList";
import Total from "./Total";

const TodoApp = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const {
    data: todos,
    loading,
    error,
    status,
  } = useSelector((state) => state.todo.getTodos);

  const addNew = () => {
    let val = ref.current.value;
    if (val) {
      dispatch(
        AddTodo({
          value: val,
          isComplete: false,
          status: false,
        })
      );
    }
    ref.current.value = null;
  };

  useEffect(() => {
    dispatch(fetchTodo());
  }, [status]);

  return (
    <div>
      <h1>TODO APP</h1>
      <div>
        <input ref={ref} type="text" placeholder="Enter todo here..." />
        <button onClick={addNew}>ADD</button>
        <div style={{height: "10px", margin : "15px"}}>
          {loading && <img style={{height : "40px", width: "40px", borderRadius : "50%"}} src="https://media3.giphy.com/media/2c85mEsTFONgM0sOQ/200w.webp?cid=ecf05e476zyzrw5jhvfkiscly037u402oqhlqsg6jk0jhyie&rid=200w.webp&ct=g"/>}
          {error && <div>Something went wrong...</div>}
        </div>
      </div>
      <br />
      {todos?.map((todo) => (
        <TodoList key={todo.id} todo={todo} />
      ))}
      <Total />
    </div>
  );
};

export default TodoApp;
