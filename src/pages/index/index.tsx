// hooks
import { useState } from "react";
import Taro, { useDidShow, Events } from "@tarojs/taro";
// components
import { View, Text, Image } from "@tarojs/components";
// styles
import "./index.scss";
// asstes
import logo from "../../asstes/logo.png";

const events = new Events();

const Index = () => {
  // state
  const [count, setCount] = useState(0);

  // methods
  events.on("addCount", (value: number) => {
    setCount(count + value);
  });

  // lifecycle
  useDidShow(() => {
    console.log(Taro.getEnv()); // 环境判断：https://docs.taro.zone/docs/apis/about/env
  });

  // template
  return (
    <View className="indexContainer">
      <View className="banner">
        <Image className="logo" src={logo}></Image>
        <Text className="title">Hello Taro!</Text>
      </View>

      <View className="content">
        <View className="btn" onClick={() => events.trigger("addCount", 1)}>
          addCount
        </View>
        <View className="arrow">→</View>
        <View className="count">{count}</View>
      </View>
    </View>
  );
};

export default Index;
