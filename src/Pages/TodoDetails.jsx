import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSingleTodo } from "../Store/action";

const TodoDetails = () => {
  const dispatch = useDispatch();
  const {
    singleData: todo,
    loading,
    error,
  } = useSelector((state) => state.getTodos);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleTodo(id));
  }, []);

  return (
    <div style={{ width: "30%", margin: "auto" }}>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong...</h1>}
      <h1>Task : {todo.value}</h1>
      <div>Status : {todo.isComplete ? "Completed" : "Pending"}</div>
      <Link to="/">Home</Link>
    </div>
  );
};

export default TodoDetails;
