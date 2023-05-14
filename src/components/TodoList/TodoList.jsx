import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Header, Icon, Button, Checkbox, Segment } from 'semantic-ui-react';

import { deleteTodo, fetchCompletedTodoList, fetchTodoList, updateTodo } from '../../actions/actions';
import "./TodoList.css";

function TodoList(props) {
  const is_next_tasks = props.is_next_tasks === "1";

  const todoListItems = useSelector(state => state[is_next_tasks ? "todoList" : "completedTodoList"].items);
  const activeBoard = useSelector(state => state.boardList.active_board);

  console.log("todoListItems = ", todoListItems, is_next_tasks, activeBoard);
  const dispatch = useDispatch();

  const handleDelete = (todo) => {
    dispatch(deleteTodo(todo))
  }

  const handleUpdate = (todo) => {
    dispatch(updateTodo(todo.id, { completed: true }))
  }

  useEffect(() => {
    is_next_tasks ? dispatch(fetchTodoList(activeBoard)) : dispatch(fetchCompletedTodoList(activeBoard));
  }, [activeBoard, is_next_tasks]);

  return (
    <Grid textAlign='center' verticalAlign='top' className='todolist-box middle'>
      <Grid.Row verticalAlign='top' className='grid-row'>
        <Header as='h2' className='todolist-header'>{props.header || 'Title Not Available'}</Header>
      </Grid.Row>

      {todoListItems.length === 0 && "No tasks here..."}

      {todoListItems.map((todoListItem, index) => (
        <Segment className={!is_next_tasks ? 'todolist-item-segment completed' : 'todolist-item-segment'}>
          <Grid className='todolist-item-box' verticalAlign='top' key={index}>

            {is_next_tasks && (
              <Grid.Column width={1} floated='left' className='todolist-item-checkbox' verticalAlign='middle'>
                <Checkbox onChange={() => handleUpdate(todoListItem)} checked={todoListItem.completed} />
              </Grid.Column>
            )}

            <Grid.Column width={is_next_tasks ? 11 : 12} className='todolist-item-content todolist-item-content-title' verticalAlign='middle' textAlign='left'>
              {todoListItem?.title?.substring(0, 50)}
            </Grid.Column>


            <Grid.Column width={2} floated='right' className='todolist-item-delete' verticalAlign='middle'>
              <Button animated='vertical' color='red' onClick={() => handleDelete(todoListItem)}>
                <Button.Content hidden>Delete</Button.Content>
                <Button.Content visible>
                  <Icon name='trash' />
                </Button.Content>
              </Button>
            </Grid.Column>
          </Grid>

          {
            todoListItem?.description.length > 0 &&
            <Grid className='todolist-item-content todolist-item-content-description' verticalAlign='middle'>
              {todoListItem?.description}
            </Grid>
          }
        </Segment>
      ))}
    </Grid>
  );
}

export default TodoList;
