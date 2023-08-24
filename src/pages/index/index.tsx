// hooks
import Taro, { useDidShow } from "@tarojs/taro";
// components
import { View, Text, Image } from "@tarojs/components";
// styles
import "./index.scss";
// asstes
import logo from "../../asstes/logo.png";

const Index = () => {
  // lifecycle
  useDidShow(() => {
    console.log(Taro.getEnv()); // 环境判断：https://docs.taro.zone/docs/apis/about/env
  });

  // template
  return (
    <View className="indexContainer">
      <Image className="logo" src={logo}></Image>
      <Text className="title">Hello Taro!</Text>
    </View>
  );
};

export default Index;
