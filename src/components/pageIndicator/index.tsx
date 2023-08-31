// hooks
import { useDidShow, navigateTo } from "@tarojs/taro";
// components
import { View } from "@tarojs/components";
// styles
import "./index.scss";

// types
interface IPropsType {
  prePageUrl?: string;
  prePageTitle?: string;
  nextPageUrl?: string;
  nextPageTitle?: string;
}

const PageIndicator = (props: IPropsType) => {
  // props
  const { prePageUrl, prePageTitle, nextPageUrl, nextPageTitle } = props;

  // lifecycle
  useDidShow(() => {
    console.log("PageIndicator");
  });

  // template
  return (
    <View className="pageIndicator">
      {prePageTitle && prePageUrl && (
        <View
          className="pre"
          onClick={() => {
            navigateTo({ url: prePageUrl });
          }}
        >
          ← {prePageTitle}
        </View>
      )}

      {nextPageTitle && nextPageUrl && (
        <View
          className="next"
          onClick={() => {
            navigateTo({ url: nextPageUrl });
          }}
        >
          {nextPageTitle} →
        </View>
      )}
    </View>
  );
};

export default PageIndicator;
