/**
 * 全局导航控制类
 */
export default class NavigationUtil {
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
