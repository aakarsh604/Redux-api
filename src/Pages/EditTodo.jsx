import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTodo } from "../Store/action";

const EditTodo = () => {
  const { id } = useParams();
  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (id) => {
    let updatedTodo = ref.current.value;
    let data = {
        value : updatedTodo,
    };
    let payload = {
      id,
      data,
    };
    dispatch(updateTodo(payload));
    navigate("/");
  };

  return (
    <div>
      <h1> Update Todo </h1>
      <br />
      <input type="text" ref={ref} />
      <button onClick={ () => handleUpdate(id) }>Update</button>
    </div>
  );
};

export default EditTodo;


