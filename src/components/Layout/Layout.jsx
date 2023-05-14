import { Container, Divider, Grid, Header, Icon, Menu } from 'semantic-ui-react';

import "./Layout.css";
import BoardTab from "../BoardTab/BoardTab"
import Dashboard from "../Dashboard/Dashboard";


function Layout() {

    return (
        <div className="ui container">

            <Container>
                <Header as='h1' icon textAlign='center' className='logo-header'>
                    TODO APP
                </Header>
                
                <Divider />

                <BoardTab />

                <Divider />

                <Dashboard />
            </Container>
        </div>

    );
}

export default Layout;
