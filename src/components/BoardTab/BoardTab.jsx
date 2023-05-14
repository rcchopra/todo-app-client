import "./BoardTab.css";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon, Menu } from 'semantic-ui-react';

import { fetchBoardList, addNewBoard, switchBoardSuccess, deleteBoard } from '../../actions/actions';

function BoardTab(props) {
    const boardList = useSelector(state => state.boardList.items);
    const activeBoard = useSelector(state => state.boardList.active_board);

    console.log("boardsList = ", boardList)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBoardList())
    }, []);

    const handleAddNew = () => {
        // Handle the click event for "Add new" here
        const new_board_name = prompt("Enter your new board name")
        if (new_board_name === null) return
        dispatch(addNewBoard({ name: new_board_name }));
    };

    const handleBoardClick = (board) => {
        console.log(board, " clicked")
        dispatch(switchBoardSuccess(board))
    }

    const handleDelete = (board) => {
        // Handle the click event for the delete button here
        // You can dispatch an action to delete the board from the list
        console.log("Deleting board:", board);
        dispatch(deleteBoard(board))
    }

    return (
        <section className="BoardTab" id="board-tabs-list-section">
            <Menu>
                <Menu className="board-tab-list">
                    {
                        boardList.map(board => {
                            let is_active = board.id === activeBoard?.id
                            return (
                                <Menu className="menu-item" verticalAlign="middle">
                                    <Menu.Item
                                        onClick={() => handleBoardClick(board)}
                                        name={board.name}
                                        key={board.id}
                                        style={is_active ? {
                                            backgroundColor: '#d52feb',
                                            color: 'white',
                                            fontWeight: 'bold'
                                        } : {
                                            fontWeight: 'bold'
                                        }}

                                    />
                                    <Icon
                                        name="trash"
                                        color="purple"
                                        className="delete-button"
                                        onClick={() => handleDelete(board)}
                                    />
                                </Menu>
                            )
                        })
                    }
                </Menu>
                <Menu.Menu position='right' id="add-new-board-container">
                    <Menu.Item onClick={handleAddNew} id="add-new-board">
                        Add new
                        <Icon name='add' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </section>
    );
}

export default BoardTab;
