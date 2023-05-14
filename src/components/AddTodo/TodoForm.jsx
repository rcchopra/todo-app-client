import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';

import './TodoForm.css'
import { addNewTodo } from '../../actions/actions';

function TodoForm() {
  const [todo, setTodo] = useState({});
  const activeBoard = useSelector(state => state.boardList.active_board);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo({...todo, board_id: activeBoard.id}));
    setTodo({});
  };

  return (
    <Form onSubmit={handleSubmit} className='todoform-box'>
      <Form.Field className='todoform-field-box todoform-field-box-title'>
        {/* <label>New Todo</label> */}
        <input
          type="text"
          value={todo.title || ''}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          placeholder="Enter a new todo title..."
          required
        />
      </Form.Field>
      <Form.Field className='todoform-field-box todoform-field-box-desc'>
        {/* <label>New Todo</label> */}
        <input
          type="text"
          value={todo.description || ''}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          placeholder="Enter a todo description..."
          required
        />
      </Form.Field>
      <Button type="submit" primary>Add Todo</Button>
    </Form>
  );
}

export default TodoForm;
