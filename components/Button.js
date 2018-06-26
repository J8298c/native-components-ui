import React from 'react';
import { TouchableOpactiy, Text } from 'react-native'

const Button = props => (
    <TouchableOpactiy
        onPress={props.onBtnPress}
    >
        <Text>{props.buttonText}</Text>
    </TouchableOpactiy>
)