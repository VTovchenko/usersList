import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import moment from 'moment';
import styles from './styles';

function Description(props) {
    if (props.desc) {
        return <Text numberOfLines={2}>{props.desc}</Text>
    }
    return null;
}

function Avatar(props) {
    var source;
    if (props.image) {
        source = { uri: props.image };
    } else {
        source = require('../../resources/empty-avatar.jpg');
    }
    return <Image style={styles.image} source={source} />
}

class Card extends Component {

    onPress = () => {
        if (this.props.onPress) {
            this.props.onPress(this.props.item);
        }
    }
    render() {
        var joinDate = 'joined ' + moment(this.props.item.timestaamp).fromNow();
        return (
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View style={styles.container}>
                    <Avatar image={this.props.item.image} />
                    <View style={styles.textLayout}>
                        <Text style={styles.nameText}>{`${this.props.item.firstName} ${this.props.item.lastName}`}</Text>
                        <Text style={styles.companyText}>{this.props.item.company}</Text>
                        <Description desc={this.props.item.desc} />
                        <Text style={styles.joinedText}>{joinDate}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
};

export default Card;