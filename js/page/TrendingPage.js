/**
 * 趋势页面
 */
import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

type Props = {}
export default class TrendingPage extends Component <Props> {
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.trending}>TrendingPage</Text>
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
    trending: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
})
