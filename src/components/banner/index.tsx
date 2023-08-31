// components
import { View, Image, Text } from "@tarojs/components";
// asstes
import logo from "../../asstes/logo.png";
// styles
import "./index.scss";

// types
interface IPropsType {
  title: string;
}

const Banner = (props: IPropsType) => {
  return (
    <View className="banner">
      <Image className="logo" src={logo}></Image>
      <Text className="title">Hello {props.title}!</Text>
    </View>
  );
};

export default Banner;
