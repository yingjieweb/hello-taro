// hooks
import { useState } from "react";
import Taro, {
  useDidShow,
  Events,
  hideTabBarRedDot,
  setStorage,
} from "@tarojs/taro";
// components
import { View } from "@tarojs/components";
import Banner from "@/components/banner";
import PageIndicator from "@/components/pageIndicator";
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

    hideTabBarRedDot({
      index: 0,
    });
    setStorage({
      key: "redDotNotify0",
      data: true,
    });
  });

  // template
  return (
    <View className="indexContainer">
      <Banner title="Taro! 👋" />

      <View className="content">
        <View className="btn" onClick={() => events.trigger("addCount", 1)}>
          addCount
        </View>
        <View className="arrow">→ 「Try Events」 →</View>
        <View className="count">{count}</View>
      </View>

      <View
        className="message"
        onClick={() => window.open("https://docs.taro.zone/docs")}
      >
        If you want to know more about Taro! 🤔
      </View>

      <PageIndicator nextPageUrl="pages/hooks/index" nextPageTitle="Hooks" />
    </View>
  );
};

export default Index;
