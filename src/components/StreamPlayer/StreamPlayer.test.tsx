import { shallow } from "enzyme";
import React from "react";
import { StreamPlayer, IStreamPlayer } from "./StreamPlayer";
import { WebViewProps } from "react-native-webview";

const createTestProps = (props: IStreamPlayer) => ({
  ...props,
});

describe("StreamPlayer Component", () => {
  const props = createTestProps({ uri: "https://www.twitch.tv/esl_sc2" });
  const wrapper = shallow<typeof StreamPlayer>(<StreamPlayer {...props} />);

  describe("rendering", () => {
    it("should render a <View />", () => {
      expect(wrapper.find("View")).toHaveLength(1);
    });

    it("should render a <WebView />", () => {
      expect(wrapper.find("WebView")).toHaveLength(1);
    });

    it("should WebView component receive the correct prop", () => {
      const result = wrapper.find("WebView").first().props() as WebViewProps;
      expect(result.source).toEqual({ uri: "https://www.twitch.tv/esl_sc2" });
    });
  });
});
