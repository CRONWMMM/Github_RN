/**
 * 最热页面
 */
import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

type Props = {}
export default class PopularPage extends Component <Props> {
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.popular}>PopularPage</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    popular: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
})
