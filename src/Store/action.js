import {
  ADD_TODO_SUCCESS,
  COMPLETE_TODO,
  DELETE_TODO,
  GET_SINGLE_TODO_ERROR,
  GET_SINGLE_TODO_LOADING,
  GET_SINGLE_TODO_SUCCESS,
  GET_TODOS_ERROR,
  GET_TODOS_LOADING,
  GET_TODOS_SUCCESS,
  UPDATE_TODO,
} from "./types";
import axios from "axios";

export const completeTodo = (payload) => (dispatch) => {
  axios.patch(`http://localhost:8080/todos/${payload.id}`, payload.data)
  .then((res) => dispatch({ type: COMPLETE_TODO, payload : payload.id }));
};

export const updateTodo = (payload) => (dispatch) => {
  axios.patch(`http://localhost:8080/todos/${payload.id}`, payload.data);
};

export const deleteTodo = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:8080/todos/${id}`)
    .then((res) => dispatch({ type: DELETE_TODO, id }));
};

export const fetchTodo = () => (dispatch) => {
  dispatch({ type: GET_TODOS_LOADING });

  axios
    .get("http://localhost:8080/todos")
    .then((res) => dispatch({ type: GET_TODOS_SUCCESS, payload: res.data }))

    .catch((err) => {
      dispatch({ type: GET_TODOS_ERROR });
    });
};

export const fetchSingleTodo = (payload) => (dispatch) => {
  dispatch({ type: GET_SINGLE_TODO_LOADING });

  axios
    .get(`http://localhost:8080/todos/${payload}`)
    .then((res) =>
      dispatch({ type: GET_SINGLE_TODO_SUCCESS, payload: res.data })
    )

    .catch((err) => {
      dispatch({ type: GET_SINGLE_TODO_ERROR });
    });
};

export const AddTodo = (payload) => (dispatch) => {
  axios
    .post("http://localhost:8080/todos", payload)
    .then((res) => dispatch({ type: ADD_TODO_SUCCESS, payload: res.data }));
};
