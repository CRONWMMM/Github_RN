/**
 * 全局导航控制类
 */
export default class NavigationUtil {
    /**
     * @description 跳转到指定页面
     * @param params 需要传递的参数
     * @param page 需要跳转的路由名
     */
    static goPage (params, page) {
        const navigation = NavigationUtil.navigation
        if (!navigation) {
            console.log('NavigationUtil.navigation can not be null')
            return
        }
        navigation.navigate(page, {
            ...params
        })
    }

    /**
     * @description 返回上一页
     * @param navigation
     */
    static goBack (navigation) {
        navigation.goBack()
    }

    /**
     * @description 重置到首页
     * @param params
     */
    static resetToHomePage (params) {
        const { navigation } = params
        navigation.navigate('Main')
    }
}
