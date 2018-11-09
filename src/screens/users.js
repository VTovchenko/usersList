import React, { Component } from 'react';
import {
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';
import { connect } from "react-redux";
import { fetchUsers } from '../actions/users';
import Card from '../components/card/card';

class Users extends Component {

    constructor(props) {
        super(props);
        this.page = 0;
    }

    componentDidMount() {
        this.dispatchFetchUsers();
    }

    dispatchFetchUsers() {
        this.props.dispatch(fetchUsers(this.page++));
    }

    onCardPress = (item) => {
        this.props.openSideMenu(item);
    }

    loadMore = () => {
        this.dispatchFetchUsers();
    }

    renderFooter = () => {
        if (!this.props.loading) {
            return null;
        }
        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
                >
                <ActivityIndicator animating size="large" />
            </View>
        );
    }

    render() {
        const { error, users } = this.props;

        if (error) {
            alert("error: " + error);
        }

        return (
            
            <View style={{ backgroundColor: '#ECF0F1', flex: 1 }}>
                <FlatList
                    data={users}
                    renderItem={({ item }) =>
                        <Card item={item} onPress={this.onCardPress} />}

                    // had better to use item.email instead index
                    // but there are duplicates in the json
                    keyExtractor={(item, index) => index + ''}
                    ListFooterComponent={this.renderFooter}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.7}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users.items,
    loading: state.users.loading,
    error: state.users.error
  });

export default connect(mapStateToProps)(Users);