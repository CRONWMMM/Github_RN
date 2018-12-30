/**
 * 我的页面
 */
import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

type Props = {}
export default class MyPage extends Component <Props> {
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.my}>MyPage</Text>
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
    my: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
})
