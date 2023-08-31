// hooks
import { useState } from "react";
import {
  useLoad,
  useReady,
  useDidShow,
  usePullDownRefresh,
  usePageScroll,
  useReachBottom,
} from "@tarojs/taro";
// utils
import { debounce } from "lodash";
// components
import { View, Text, Label } from "@tarojs/components";
import Banner from "@/components/banner";
import PageIndicator from "@/components/pageIndicator";
// styles
import "./index.scss";

const Hooks = () => {
  // states
  const [curExecuteHook, setCurExecuteHook] = useState("useLoad");
  const [log, setLog] = useState("");

  // lifecycle
  useLoad(() => {
    console.log("Page loaded.");
    setCurExecuteHook("useLoad");
    setLog(log + "useLoad、");
  });
  useReady(() => {
    console.log("Page ready.");
    setCurExecuteHook("useReady");
    setLog(log + "useReady、");
  });
  useDidShow(() => {
    console.log("Page showed.");
    setCurExecuteHook("useDidShow");
    setLog(log + "useDidShow、");
  });
  usePullDownRefresh(() => {
    console.log("Page on pullDownRefresh.");
    setCurExecuteHook("usePullDownRefresh");
    setLog(log + "usePullDownRefresh、");
  });
  usePageScroll(() => {
    console.log("Page on scroll.");
    setCurExecuteHook("usePageScroll");
    debounce(() => setLog(log + "usePageScroll、"), 1500)();
  });
  useReachBottom(() => {
    console.log("Page reached bottom.");
    setCurExecuteHook("useReachBottom");
    setLog(log + "useReachBottom、");
  });

  // template
  return (
    <View className="hooksContainer">
      <Banner title="Taro Hooks!"></Banner>

      <Text className="info">curExecuteHook: 「{curExecuteHook}」</Text>

      <View className="log">executeHookLog: 「{log}」</View>

      <View className="scrollTipsIcon"> ⬇ </View>

      <PageIndicator prePageTitle="Index" prePageUrl="pages/index/index" />
    </View>
  );
};

export default Hooks;
