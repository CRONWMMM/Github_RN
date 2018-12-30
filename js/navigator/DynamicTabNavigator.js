/**
 * 动态导航器
 */
import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {
    createBottomTabNavigator
} from 'react-navigation'
import { BottomTabBar } from 'react-navigation-tabs'
// pages
import PopularPage from '../page/PopularPage'
import TrendingPage from '../page/TrendingPage'
import FavoritePage from '../page/FavoritePage'
import MyPage from '../page/MyPage'
// icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

const TABS = { // 路由页面
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon: ({ tintColor, focused }) => (
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{color: tintColor}}/>
            )
        }
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={'md-trending-up'}
                    size={26}
                    style={{color: tintColor}}/>
            )
        }
    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({ tintColor, focused }) => (
                <MaterialIcons
                    name={'favorite'}
                    size={26}
                    style={{color: tintColor}}/>
            )
        }
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor, focused }) => (
                <Entypo
                    name={'user'}
                    size={26}
                    style={{color: tintColor}}/>
            )
        }
    }
}

type Props = {}
export default class DynamicTabNavigator extends Component <Props> {
    constructor (props) {
        super(props)
    }

    _tabNavigator () {
        const { PopularPage, TrendingPage, FavoritePage, MyPage } = TABS
        const tabs = { PopularPage, TrendingPage, FavoritePage, MyPage } // 这里可以更根据需要定制显示的 tab
        PopularPage.navigationOptions.tabBarLabel = '最热' // 动态配置 tab 属性
        return createBottomTabNavigator(tabs, {
            tabBarComponent: TabBarComponent
        })
    }

    render () {
        const Tab = this._tabNavigator()
        return <Tab/>
    }
}

class TabBarComponent extends Component {
    constructor (props) {
        super(props)
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime(),
        }
    }

    render () {
        const { routes, index } = this.props.navigation.state
        const params = routes[index].params
        if (params) {
            const { theme } = params
            // 以最新更新时间为准，防止被其他 tab 之前的修改覆盖掉
            if (theme && theme.updateTime > this.theme.updateTime) {
                this.theme = theme
            }
        }
        return <BottomTabBar {...this.props}
                             activeTintColor={this.theme.tintColor || this.props.activeTintColor}/>
    }
}
