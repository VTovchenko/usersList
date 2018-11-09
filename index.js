/** @format */

import React, { Component } from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';

import SideMenu from 'react-native-side-menu';

import Users from './src/screens/users';
import Profile from './src/screens/profile';
import store from './src/config/store';

const { width } = Dimensions.get('window');
const openMenuOffset = width - width / 10;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            user: {}
        }
    }
    openSideMenu(user) {
        this.setState({
            isOpen: true,
            user
        });
    }
    closeSideMenu() {
        this.setState({ isOpen: false });
    }
    render() {
        const menu = <Profile closeSideMenu={this.closeSideMenu.bind(this)} user={this.state.user} />;
        return (
            <Provider store={store}>
                <SideMenu
                    menu={menu}
                    disableGestures={true}
                    isOpen={this.state.isOpen}
                    menuPosition='right'
                    openMenuOffset={openMenuOffset}
                >
                    <Users openSideMenu={this.openSideMenu.bind(this)} />  
                </SideMenu>
            </Provider>      
        );
    }
}

AppRegistry.registerComponent(appName, () => App);
