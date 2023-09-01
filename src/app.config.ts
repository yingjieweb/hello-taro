export default defineAppConfig({
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/tabbar/home.png",
        selectedIconPath: "./assets/tabbar/home-active.png",
      },
      {
        pagePath: "pages/hooks/index",
        text: "Hooks",
        iconPath: "./assets/tabbar/hooks.png",
        selectedIconPath: "./assets/tabbar/hooks-active.png",
      },
      {
        pagePath: "pages/routes/index",
        text: "Routes",
        iconPath: "./assets/tabbar/routes.png",
        selectedIconPath: "./assets/tabbar/routes-active.png",
      },
    ],
    backgroundColor: "#3030b9",
    selectedColor: "#fff",
    // position: 'bottom', // 默认 bottom, 可选 top|bottom
  },
  pages: ["pages/index/index", "pages/hooks/index", "pages/routes/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
