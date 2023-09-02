import Taro from "@tarojs/taro";
// components
import { Text, View } from "@tarojs/components";
import Banner from "@/components/banner";
// styles
import "./index.scss";

const Routes = () => {
  return (
    <View className="routesContainer">
      <Banner title="Taro Routes!" />

      <View className="content">
        <View className="item">
          <View className="msg">
            switchTab: 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
          </View>
          <Text
            className="btn"
            onClick={() => {
              Taro.switchTab({
                url: "/pages/index/index",
              });
            }}
          >
            Try it?
          </Text>
        </View>
        <View className="item">
          reLaunch: 关闭所有页面，打开到应用内的某个页面
          <Text
            className="btn"
            onClick={() => {
              Taro.reLaunch({
                url: "/pages/index/index",
              });
            }}
          >
            Try it?
          </Text>
        </View>
        <View className="item">
          redirectTo: 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到
          tabbar 页面
        </View>
        <View className="item">
          navigateTo: 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar
          页面。使用 Taro.navigateBack
          可以返回到原页面。小程序中页面栈最多十层。
        </View>
        <View className="item">
          navigateBack: 关闭当前页面，返回上一页面或多级页面。可通过
          getCurrentPages 获取当前的页面栈，决定需要返回几层。
        </View>
      </View>
    </View>
  );
};

export default Routes;
