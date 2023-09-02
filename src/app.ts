import { PropsWithChildren } from "react";
import { useLaunch, showTabBarRedDot, getStorage } from "@tarojs/taro";
import "./app.scss";

function App({ children }: PropsWithChildren<any>) {
  // methods
  const setRedDotNotify = () => {
    [0, 1, 2].forEach((index) => {
      getStorage({
        key: `redDotNotify${index}`,
        fail: () => {
          showTabBarRedDot({
            index,
          });
        },
      });
    });
  };

  // lifecycle
  useLaunch(() => {
    console.log("App launched.");
    setRedDotNotify();
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
