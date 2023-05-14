import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Header, Icon, Button, Checkbox, Segment } from 'semantic-ui-react';

import { fetchBoardList } from '../../actions/actions';

import "./AddTodo.css";
import TodoForm from './TodoForm';

function AddTodo(props) {

  const boardList = useSelector(state => state.boardList.items);
  const activeBoard = useSelector(state => state.boardList.active_board);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoardList())
  }, []);

  return (
    <Grid textAlign='center' verticalAlign='top' className='addtodo-box' compact>
      <Grid.Row verticalAlign='top'>
        <Header as='h2' className='addtodo-heading'>{activeBoard?.name}</Header>
      </Grid.Row>
      <Grid.Row verticalAlign='top'>
        <TodoForm />
      </Grid.Row>
    </Grid>
  );
}

export default AddTodo;
