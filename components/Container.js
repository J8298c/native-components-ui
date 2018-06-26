import React, { Component } from 'react';
import { View } from 'react-native';

export default class Container extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                {this.props.children}
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1
    }
}