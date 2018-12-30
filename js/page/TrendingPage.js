/**
 * 趋势页面
 */
import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

type Props = {}
export default class TrendingPage extends Component <Props> {
    render () {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.trending}>TrendingPage</Text>
                <Button title="改变主题颜色" onPress={() => {
                    navigation.setParams({
                        theme: {
                            tintColor: 'red',
                            updateTime: new Date().getTime()
                        }
                    })
                }}/>
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
