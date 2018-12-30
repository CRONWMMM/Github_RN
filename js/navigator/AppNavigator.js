/**
 * App 导航
 */
import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createSwitchNavigator
} from 'react-navigation'
// pages
import WelcomePage from '../page/WelcomePage'
import HomePage from '../page/HomePage'
import DetailPage from '../page/DetailPage'

const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            header: null // 通过将 header 设置为 null 来禁用 StackNavigator 的 Navigation Bar
        }
    }
})

const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            header: null
        }
    },
    DetailPage: {
        screen: DetailPage,
        navigationOptions: {
            header: null
        }
    }
})

export default createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator
}, {
    navigationOptions: {
        header: null
    }
})
