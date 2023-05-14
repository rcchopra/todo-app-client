import axios from 'axios';
import { createAction } from 'redux-actions';

export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const ADD_NEW_TODO_SUCCESS = 'ADD_NEW_TODO_SUCCESS';
export const ADD_NEW_TODO_FAILURE = 'ADD_NEW_TODO_FAILURE';

export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';

export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_FAILURE = 'UPDATE_TODO_FAILURE';

export const FETCH_TODO_LIST = 'FETCH_TODO_LIST';
export const FETCH_TODO_LIST_SUCCESS = 'FETCH_TODO_LIST_SUCCESS';
export const FETCH_TODO_LIST_FAILURE = 'FETCH_TODO_LIST_FAILURE';

export const FETCH_COMPLETED_TODO_LIST = 'FETCH_COMPLETED_TODO_LIST';
export const FETCH_COMPLETED_TODO_LIST_SUCCESS = 'FETCH_COMPLETED_TODO_LIST_SUCCESS';
export const FETCH_COMPLETED_TODO_LIST_FAILURE = 'FETCH_COMPLETED_TODO_LIST_FAILURE';

export const FETCH_BOARD_LIST = 'FETCH_BOARD_LIST';
export const FETCH_BOARD_LIST_SUCCESS = 'FETCH_BOARD_LIST_SUCCESS';
export const FETCH_BOARD_LIST_FAILURE = 'FETCH_BOARD_LIST_FAILURE';

export const ADD_NEW_BOARD = 'ADD_NEW_BOARD';
export const ADD_NEW_BOARD_SUCCESS = 'ADD_NEW_BOARD_SUCCESS';
export const ADD_NEW_BOARD_FAILURE = 'ADD_NEW_BOARD_FAILURE';

export const SWITCH_BOARD = 'SWITCH_BOARD';
export const SWITCH_BOARD_SUCCESS = 'SWITCH_BOARD_SUCCESS';
export const SWITCH_BOARD_FAILURE = 'SWITCH_BOARD_FAILURE';

export const DELETE_BOARD = 'DELETE_BOARD';
export const DELETE_BOARD_SUCCESS = 'DELETE_BOARD_SUCCESS';
export const DELETE_BOARD_FAILURE = 'DELETE_BOARD_FAILURE';


// *************************************************************************************
// ADD NEW TODO
// *************************************************************************************

export const addNewTodoStart = createAction(ADD_NEW_TODO);

export const addNewTodoSuccess = createAction(
    ADD_NEW_TODO_SUCCESS,
    todo => ({ todo })
);

export const addNewTodoFailure = createAction(
    ADD_NEW_TODO_FAILURE,
    error => ({ error })
);

export const addNewTodo = (todo) => {

    return async (dispatch) => {
        console.log("------------------------", todo)
        dispatch(addNewTodoStart());

        try {
            const reqBody = todo
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/todos`, reqBody); // replace with your API endpoint
            console.log("New todo added successfully", response.data)
            dispatch(addNewTodoSuccess(response.data));
        } catch (error) {
            dispatch(addNewTodoFailure(error.message));
        }
    };
};


// *************************************************************************************
// UPDATE TODO
// *************************************************************************************

export const updateTodoStart = createAction(UPDATE_TODO);

export const updateTodoSuccess = createAction(
    UPDATE_TODO_SUCCESS,
    todo => ({ todo })
);

export const updateTodoFailure = createAction(
    UPDATE_TODO_FAILURE,
    error => ({ error })
);

export const updateTodo = (id, todo) => {

    return async (dispatch) => {
        console.log("------------------------", id, todo)
        dispatch(updateTodoStart());

        try {
            const response = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/todos/${id}`, todo); // replace with your API endpoint
            console.log("Todo updated successfully", response.data, todo)
            dispatch(updateTodoSuccess({"id": id}));
        } catch (error) {
            dispatch(updateTodoFailure(error.message));
        }
    };
};


// *************************************************************************************
// DELETE TODO
// *************************************************************************************

export const deleteTodoStart = createAction(DELETE_TODO);

export const deleteTodoSuccess = createAction(
    DELETE_TODO_SUCCESS,
    todo => ({ todo })
);

export const deleteTodoFailure = createAction(
    DELETE_TODO_FAILURE,
    error => ({ error })
);

export const deleteTodo = (todo) => {

    return async (dispatch) => {
        console.log("------------------------", todo)
        dispatch(deleteTodoStart());

        try {
            const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/todos/${todo.id}`); // replace with your API endpoint
            console.log("Todo deleted successfully", response.data, todo)
            dispatch(deleteTodoSuccess(todo));
        } catch (error) {
            dispatch(deleteTodoFailure(error.message));
        }
    };
};


// *************************************************************************************
// NEXT TODO LIST
// *************************************************************************************

export const fetchTodoListStart = createAction(FETCH_TODO_LIST);

export const fetchTodoListSuccess = createAction(
    FETCH_TODO_LIST_SUCCESS,
    todoList => ({ todoList })
);

export const fetchTodoListFailure = createAction(
    FETCH_TODO_LIST_FAILURE,
    error => ({ error })
);

export const fetchTodoList = (board) => {

    return async (dispatch) => {
        console.log("------------------------", board)
        dispatch(fetchTodoListStart());

        try {
            const reqBody = {board_id : board.id, completed: false}
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/todos/filter`, reqBody); // replace with your API endpoint
            console.log("next tasks response.data", response.data)
            dispatch(fetchTodoListSuccess(response.data));
        } catch (error) {
            dispatch(fetchTodoListFailure(error.message));
        }
    };
};

// *************************************************************************************
// COMPLETED TODO LIST
// *************************************************************************************

export const fetchCompletedTodoListStart = createAction(FETCH_COMPLETED_TODO_LIST);

export const fetchCompletedTodoListSuccess = createAction(
    FETCH_COMPLETED_TODO_LIST_SUCCESS,
    completedTodoList => ({ completedTodoList })
);

export const fetchCompletedTodoListFailure = createAction(
    FETCH_COMPLETED_TODO_LIST_FAILURE,
    error => ({ error })
);

export const fetchCompletedTodoList = (board) => {
    return async (dispatch) => {
        dispatch(fetchCompletedTodoListStart());

        try {
            const reqBody = {board_id : board.id, completed: true}
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/todos/filter`, reqBody); // replace with your API endpoint
            console.log("completed tasks response.data", response.data)
            dispatch(fetchCompletedTodoListSuccess(response.data));
        } catch (error) {
            dispatch(fetchCompletedTodoListFailure(error.message));
        }
    };
};


// *************************************************************************************
// BOARDS LIST
// *************************************************************************************

export const fetchBoardListStart = createAction(FETCH_BOARD_LIST);

export const fetchBoardListSuccess = createAction(
    FETCH_BOARD_LIST_SUCCESS,
    boardList => ({ boardList })
);

export const fetchBoardListFailure = createAction(
    FETCH_BOARD_LIST_FAILURE,
    error => ({ error })
);

export const addNewBoardStart = createAction(ADD_NEW_BOARD);

export const addNewBoardSuccess = createAction(
    ADD_NEW_BOARD_SUCCESS,
    boardList => ({ board: boardList })
);

export const addNewBoardFailure = createAction(
    ADD_NEW_BOARD_FAILURE,
    error => ({ error })
);

export const switchBoardStart = createAction(SWITCH_BOARD);

export const switchBoardSuccess = createAction(
    SWITCH_BOARD_SUCCESS,
    board => ({ board })
);

export const switchBoardFailure = createAction(
    SWITCH_BOARD_FAILURE,
    error => ({ error })
);

export const deleteBoardStart = createAction(DELETE_BOARD);

export const deleteBoardSuccess = createAction(
    DELETE_BOARD_SUCCESS,
    board => ({ board })
);

export const deleteBoardFailure = createAction(
    DELETE_BOARD_FAILURE,
    error => ({ error })
);

export const fetchBoardList = () => {
    return async (dispatch) => {
        dispatch(fetchBoardListStart());

        try {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/boards`);
            console.log(response.data)
            dispatch(fetchBoardListSuccess(response.data));
        } catch (error) {
            dispatch(fetchBoardListFailure(error.message));
        }
    };
};

export const addNewBoard = (boardData) => {
    return async (dispatch) => {
        dispatch(addNewBoardStart())

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/boards`, boardData);
            dispatch(addNewBoardSuccess(response.data));
            console.log('Board added successfully!');
        } catch (error) {
            // Handle any error that occurred during the API call
            console.error('Error adding board:', error.message);
            dispatch(addNewBoardFailure(error.message));
        }
    };
};

export const deleteBoard = (board) => {
    return async (dispatch) => {
        dispatch(deleteBoardStart())

        try {
            const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/boards/${board.id}`);
            console.log(response)
            dispatch(deleteBoardSuccess(board));
            console.log('Board deleted successfully!', board);
        } catch (error) {
            // Handle any error that occurred during the API call
            console.error('Error adding board:', error.message);
            dispatch(deleteBoardFailure(error.message));
        }
    };
};
