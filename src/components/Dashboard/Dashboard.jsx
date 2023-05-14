import "./Dashboard.css";

import { Container, Divider, Grid, Header, Icon, Menu } from 'semantic-ui-react';
import TodoList from '../TodoList/TodoList';
import AddTodo from "../AddTodo/AddTodo";

function Dashboard() {

    return (
        <Grid columns={3} textAlign='center' relaxed='very'>
            <Grid.Column width={5}>
                <TodoList header="Next Tasks" is_next_tasks="1" />
            </Grid.Column>
            <Grid.Column width={6}>
                <AddTodo/>
            </Grid.Column>
            <Grid.Column width={5}>
                <TodoList header="Completed Tasks" />
            </Grid.Column>
        </Grid>
    );
}

export default Dashboard;
