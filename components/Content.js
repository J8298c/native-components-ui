import React, { Component } from 'react';
import { View } from 'react-native';

export default class Content extends Component {
    render() {
        return (
            <View style={styles.contentStyles}>
                {this.props.children}
            </View>
        )
    }
}

const styles = {
    contentStyles: {
        flex: 1,
        marginTop: 50
    }
}