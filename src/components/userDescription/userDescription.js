import React from 'react';
import { FlatList, } from 'react-native';
import Field from '../field/field';
import styles from './styles';

const UserDescription = ({data}) => {
    return (
        <FlatList style={styles.container}
            data={data}
            renderItem={({ item }) => <Field title={item.title} value={item.value} />}
            keyExtractor={item => item.title}
        />
    );
}

export default UserDescription;