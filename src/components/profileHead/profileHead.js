import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableHighlight, ImageBackground } from 'react-native';
import styles from './styles';

const BackButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={styles.backButtonTouchable}
            onPress={() => onPress()}
        >
            <View style={styles.backButtonContainer}>
                <Image
                    style={styles.backButton}
                    source={require('../../resources/arrow.png')}
                />
            </View>
        </TouchableOpacity>
    );
};

class ProfileHead extends Component {
    
    getSourceImage() {
        if (this.props.image) {
            return { uri: this.props.image };
        }
        return require('../../resources/empty-avatar.jpg');
    }

    render() {
        const fullName = `${this.props.firstName} ${this.props.lastName}`;
        const imageSource = this.getSourceImage();
        return (
            <ImageBackground
                style={styles.container}
                source={imageSource}
                blurRadius={3}>
                <BackButton onPress={this.props.onBackButtonPress} />
                <Image style={styles.image} source={imageSource} />
                <Text style={styles.text}>{fullName}</Text>
                <TouchableHighlight
                    underlayColor="white"
                    style={styles.chatButton}
                >
                    <Text style={styles.text}>Chat with {fullName}</Text>
                </TouchableHighlight>
            </ImageBackground>
        );
    }
};

export default ProfileHead;