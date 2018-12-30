/**
 * 首页
 */
import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

type Props = {}
export default class HomePage extends Component <Props> {
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.home}>HomePage</Text>
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
    home: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
})
