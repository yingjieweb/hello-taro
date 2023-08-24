// components
import { View, Text, Image } from "@tarojs/components";
// styles
import "./index.scss";
// asstes
import logo from "../../asstes/logo.png";

const Index = () => {
  return (
    <View className="indexContainer">
      <Image className="logo" src={logo}></Image>
      <Text className="title">Hello Taro!</Text>
    </View>
  );
};

export default Index;
