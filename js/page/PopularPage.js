/**
 * 最热页面
 */
import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation'
import NavigationUtil from '../navigator/NavigationUtil'

type Props = {}

class PopularTab extends Component <Props> {
    render () {
        const { tabLabel } = this.props
        return (
            <View>
                <Text>{tabLabel}</Text>
            </View>
        )
    }
}

export default class PopularPage extends Component <Props> {
    render () {
        const TabNavigator = createMaterialTopTabNavigator({
            PopularTab1: {
                screen: PopularTab,
                navigationOptions: {
                    title: 'Tab1'
                }
            },
            PopularTab2: {
                screen: PopularTab,
                navigationOptions: {
                    title: 'Tab2'
                }
            },
            PopularTab3: {
                screen: PopularTab,
                navigationOptions: {
                    title: 'Tab3'
                }
            }
        })
        return (
            <View style={styles.container}>
                <TabNavigator/>
                <Text onPress={() => {
                    NavigationUtil.goPage({
                        navigation: this.props.navigation
                    }, 'DetailPage')
                }}>跳转到详情页</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    popular: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
})
