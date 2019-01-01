/**
 * 最热页面
 */
import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation'
import NavigationUtil from '../navigator/NavigationUtil'

class PopularTab extends Component {
    render () {
        const { tabLabel } = this.props
        return (
            <View>
                <Text>{tabLabel}</Text>
                <Text onPress={() => {
                    NavigationUtil.goPage({
                        navigation: this.props.navigation
                    }, 'DetailPage')
                }}>跳转到详情页</Text>
            </View>
        )
    }
}

type Props = {}
export default class PopularPage extends Component <Props> {
    constructor (props) {
        super(props)
        this.tabNames = [ 'JavaScript', 'Java', 'Android', 'iOS', 'React', 'React-Native', 'PHP' ]
    }

    /**
     * @description 生成 tabs 标签
     * @private
     */
    _genTabs () {
        const tabs = {}
        this.tabNames.forEach((item, index) => {
            tabs[`tab${index}`] = {
                screen: props => <PopularTab {...props} tabLabel={item}/>,
                navigationOptions: {
                    title: item
                }
            }
        })
        return tabs
    }

    render () {
        const TabNavigator = createMaterialTopTabNavigator(this._genTabs(), {
            tabBarOptions: {
                tabStyle: styles.tabStyle,
                upperCaseLabel: false, // 是否需要标签大写，默认为 true
                scrollEnabled: true, // 是否支持选项卡滚动，默认 false
                style: {
                    backgroundColor: '#678'
                },
                indicatorStyle: styles.indicatorStyle, // 标签指示器的样式
                labelStyle: styles.labelStyle, // 文字样式
            }
        })
        return (
            <View style={styles.container}>
                <TabNavigator/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    tabStyle: {
        minWidth: 50
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: 'white'
    },
    labelStyle: {
        fontSize: 13
    }
})
