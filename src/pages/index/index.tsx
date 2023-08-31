// hooks
import { useState } from "react";
import Taro, { useDidShow, Events } from "@tarojs/taro";
// components
import { View } from "@tarojs/components";
import Banner from "@/components/banner";
// styles
import "./index.scss";

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
      <Banner title="Taro"></Banner>

      <View className="content">
        <View className="btn" onClick={() => events.trigger("addCount", 1)}>
          addCount
        </View>
        <View className="arrow">→ 「Try Events」 →</View>
        <View className="count">{count}</View>
      </View>
    </View>
  );
};

export default Index;
