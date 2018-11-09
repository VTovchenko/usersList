import React, { Component } from 'react';
import { View } from 'react-native';
import ProfileHead from '../components/profileHead/profileHead';
import UserDescription from '../components/userDescription/userDescription';

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(props) {
        this.data = [{
            title: 'Email',
            value: props.user.email
        }, {
            title: 'First Name',
            value: props.user.firstName
        }, {
            title: 'Last Name',
            value: props.user.lastName
        }, {
            title: 'LinkedIn',
            value: props.user.linkedin
        }, {
            title: 'Description',
            value: props.user.desc
        }];
    }
    render() {
        const { firstName, lastName, image } = this.props.user;
        return (
            <View style={{ flex: 1 }}>
                <ProfileHead
                    firstName={firstName}
                    lastName={lastName}
                    image={image}
                    onBackButtonPress={this.props.closeSideMenu} />
                <UserDescription data={this.data} />
            </View>
        );
    }
};

export default Profile;