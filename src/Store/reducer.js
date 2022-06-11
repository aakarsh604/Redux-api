import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
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

const initialState = {
  getTodos: {
    loading: false,
    error: false,
    data: [],
    singleData : []
  },
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODOS_LOADING: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: true,
          error: false,
        },
      };
    }
    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: false,
          error: false,
          data: payload,
        },
      };
    }
    case GET_TODOS_ERROR: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: false,
          error: true,
          status : false,
        },
      };
    }
    case GET_SINGLE_TODO_LOADING: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: true,
          error: false,
        },
      };
    }
    case GET_SINGLE_TODO_SUCCESS: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: false,
          error: false,
          singleData: payload,
        },
      };
    }
    case GET_SINGLE_TODO_ERROR: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: false,
          error: true,
          status : false,
        },
      };
    }
    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        getTodos: {
          data: [...state.getTodos.data, payload],
        },
      };
    }
    case COMPLETE_TODO: {
      // state.getTodos.data.map((todo) => {
      //    if( todo.id === payload ){
      //     console.log(todo.isComplete)
      //     return { ...todo, isComplete : true}
      //    }
      //    return todo;
      // })
      return {
        ...state,
        getTodos : {
          ...state.getTodos,
          status : !state.getTodos.status,
        }
      }
    }
    case DELETE_TODO: {
        return {
          ...state,
          getTodos : {
            ...state.getTodos,
            status : !state.getTodos.status,
          }
        }
      };
    case UPDATE_TODO: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
