// reducers.js

import { handleActions } from 'redux-actions';

import {
  ADD_NEW_TODO,
  ADD_NEW_TODO_SUCCESS,
  ADD_NEW_TODO_FAILURE,
  FETCH_TODO_LIST,
  FETCH_TODO_LIST_SUCCESS,
  FETCH_TODO_LIST_FAILURE,
  FETCH_COMPLETED_TODO_LIST,
  FETCH_COMPLETED_TODO_LIST_SUCCESS,
  FETCH_COMPLETED_TODO_LIST_FAILURE,
  FETCH_BOARD_LIST,
  FETCH_BOARD_LIST_SUCCESS,
  FETCH_BOARD_LIST_FAILURE,
  ADD_NEW_BOARD,
  ADD_NEW_BOARD_SUCCESS,
  ADD_NEW_BOARD_FAILURE,
  SWITCH_BOARD,
  SWITCH_BOARD_SUCCESS,
  SWITCH_BOARD_FAILURE,
  DELETE_BOARD,
  DELETE_BOARD_SUCCESS,
  DELETE_BOARD_FAILURE,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE
} from '../actions/actions';

const initialState = {
  todoList: {
    isLoading: false,
    items: [],
    error: null,
  },
  completedTodoList: {
    isLoading: false,
    items: [],
    error: null,
  },
  boardList: {
    isLoading: false,
    items: [],
    error: null,
    active_board: null
  },
};

export default handleActions(
  {
    [ADD_NEW_TODO]: state => ({
      ...state,
      todoList: {
        ...state.todoList,
        isLoading: true,
        error: null,
      },
    }),

    [ADD_NEW_TODO_SUCCESS]: (state, action) => ({
      ...state,
      todoList: {
        ...state.todoList,
        isLoading: false,
        items: [action.payload.todo, ...state.todoList.items],
      },
    }),

    [ADD_NEW_TODO_FAILURE]: (state, action) => ({
      ...state,
      todoList: {
        ...state.todoList,
        isLoading: false,
        error: action.payload.error,
      },
    }),

    [DELETE_TODO]: state => ({
      ...state,
      todoList: {
        ...state.todoList,
        isLoading: true,
        error: null,
      },
    }),

    [DELETE_TODO_SUCCESS]: (state, action) => ({
      ...state,
      todoList: {
        ...state.todoList,
        isLoading: false,
        items: state.todoList.items.filter(obj => obj.id !== action.payload.todo.id),
      },
      completedTodoList: {
        ...state.completedTodoList,
        isLoading: false,
        items: state.completedTodoList.items.filter(obj => obj.id !== action.payload.todo.id),
      },
    }),

    [DELETE_TODO_FAILURE]: (state, action) => ({
      ...state,
      todoList: {
        ...state.todoList,
        isLoading: false,
        error: action.payload.error,
      },
    }),

    [UPDATE_TODO]: state => ({
      ...state,
      todoList: {
        ...state.todoList,
        isLoading: true,
        error: null,
      },
      completedTodoList: {
        ...state.completedTodoList,
        isLoading: true,
        error: null,
      },
    }),

    [UPDATE_TODO_SUCCESS]: (state, action) => ({
      ...state,
      todoList: {
        ...state.todoList,
        isLoading: false,
        items: state.todoList.items.filter(obj => obj.id !== action.payload.todo.id),
      },
      completedTodoList: {
        ...state.completedTodoList,
        isLoading: false,
        items: [...state.todoList.items.filter(obj => obj.id === action.payload.todo.id), ...state.completedTodoList.items],
      },
    }),

    [UPDATE_TODO_FAILURE]: (state, action) => ({
      ...state,
      todoList: {
        ...state.todoList,
        isLoading: false,
        error: action.payload.error,
      },
    }),

    [FETCH_TODO_LIST]: state => ({
      ...state,
      todoList: {
        ...state.todoList,
        isLoading: true,
        error: null,
      },
    }),

    [FETCH_TODO_LIST_SUCCESS]: (state, action) => ({
      ...state,
      todoList: {
        ...state.todoList,
        isLoading: false,
        items: action.payload.todoList,
      },
    }),

    [FETCH_TODO_LIST_FAILURE]: (state, action) => ({
      ...state,
      todoList: {
        ...state.todoList,
        isLoading: false,
        error: action.payload.error,
      },
    }),

    [FETCH_BOARD_LIST]: state => ({
      ...state,
      boardList: {
        ...state.boardList,
        isLoading: true,
        error: null,
      },
    }),

    [FETCH_BOARD_LIST_SUCCESS]: (state, action) => ({
      ...state,
      boardList: {
        ...state.boardList,
        isLoading: false,
        items: action.payload.boardList,
        active_board: state.boardList.active_board || action.payload.boardList[0],
      },
    }),

    [FETCH_BOARD_LIST_FAILURE]: (state, action) => ({
      ...state,
      boardList: {
        ...state.boardList,
        isLoading: false,
        error: action.payload.error,
      },
    }),

    [ADD_NEW_BOARD]: state => ({
      ...state,
      boardList: {
        ...state.boardList,
        isLoading: true,
        error: null,
      },
    }),

    [ADD_NEW_BOARD_SUCCESS]: (state, action) => ({
      ...state,
      boardList: {
        ...state.boardList,
        isLoading: false,
        items: [...state.boardList.items, action.payload.board],
      },
    }),

    [ADD_NEW_BOARD_FAILURE]: (state, action) => ({
      ...state,
      boardList: {
        ...state.boardList,
        isLoading: false,
        error: action.payload.error,
      },
    }),

    [SWITCH_BOARD]: state => ({
      ...state,
      boardList: {
        ...state.boardList,
        isLoading: true,
        error: null,
      },
    }),

    [SWITCH_BOARD_SUCCESS]: (state, action) => ({
      ...state,
      boardList: {
        ...state.boardList,
        isLoading: false,
        active_board: action.payload.board,
      },
    }),

    [SWITCH_BOARD_FAILURE]: (state, action) => ({
      ...state,
      boardList: {
        ...state.boardList,
        isLoading: false,
        error: action.payload.error,
      },
    }),

    [DELETE_BOARD]: state => ({
      ...state,
      boardList: {
        ...state.boardList,
        isLoading: true,
        error: null,
      },
    }),

    [DELETE_BOARD_SUCCESS]: (state, action) => ({
      ...state,
      boardList: {
        ...state.boardList,
        isLoading: false,
        items: state.boardList.items.filter(obj => obj.id !== action.payload.board.id),
        active_board: state.boardList.active_board.id === action.payload.board.id && state.boardList.items.length > 0 ? state.boardList.items[0] : state.boardList.active_board,
      },
    }),

    [DELETE_BOARD_FAILURE]: (state, action) => ({
      ...state,
      boardList: {
        ...state.boardList,
        isLoading: false,
        error: action.payload.error,
      },
    }),

    [FETCH_COMPLETED_TODO_LIST]: state => ({
      ...state,
      completedTodoList: {
        ...state.completedTodoList,
        isLoading: true,
        error: null,
      },
    }),

    [FETCH_COMPLETED_TODO_LIST_SUCCESS]: (state, action) => ({
      ...state,
      completedTodoList: {
        ...state.completedTodoList,
        isLoading: false,
        items: action.payload.completedTodoList,
      },
    }),

    [FETCH_COMPLETED_TODO_LIST_FAILURE]: (state, action) => ({
      ...state,
      completedTodoList: {
        ...state.completedTodoList,
        isLoading: false,
        error: action.payload.error,
      },
    }),
  },
  initialState
);
