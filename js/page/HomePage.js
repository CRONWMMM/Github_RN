/**
 * 首页
 */
import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import NavigationUtil from '../navigator/NavigationUtil'
import DynamicTabNavigator from '../navigator/DynamicTabNavigator'

type Props = {}
export default class HomePage extends Component <Props> {
    render () {
        // 将最外层的 navigation 保存在 NavigationUtil.navigation 中，就可以在子路由中控制跳转
        NavigationUtil.navigation = this.props.navigation
        return <DynamicTabNavigator/>
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
