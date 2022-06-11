import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { completeTodo, deleteTodo } from "../Store/action";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

export const TodoList = ({ todo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (id) => {
    let data = {
      isComplete: !todo.isComplete,
    };
    let payload = {
      id,
      data,
    };
    dispatch(completeTodo(payload));
    navigate("/");
  };

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0px 15px",
        width: "25%",
        margin: "auto",
        backgroundColor: "whitesmoke",
        marginTop: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          textDecoration: "none",
          alignItems: "center",
        }}
      >
        <input
          type="checkbox"
          onChange={() => changeHandler(todo.id)}
          checked={todo.isComplete}
        />
        <div>
          <Link
            to={`/todo/${todo.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            {todo.value}
          </Link>
        </div>
      </div>

      <div>
        <button>
          <Link
            to={`/todo/${todo.id}/edit`}
            style={{
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
            }}
          >
            <EditIcon />
          </Link>
        </button>
        <button
          onClick={() => deleteHandler(todo.id)}
          style={{ cursor: "pointer" }}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};
