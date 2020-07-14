import { shallow } from "enzyme";
import React from "react";
import { StreamDetailView, IStreamDetailView } from "./StreamDetailView";

jest.mock("@expo/vector-icons", () => {
  const { View } = require("react-native");
  return {
    Ionicons: View,
    createIconSet: View,
  };
});

const createTestProps = (props: IStreamDetailView) => ({
  ...props,
});

const mockProps = {
  title: "StarCraft II",
  description:
    "Russian voice of StarCraft II. Mathematician, esports manager and commentator.",
  uri: "https://www.twitch.tv/alex007sc2",
  viewers: 1717,
};

describe("StreamDetailView Component", () => {
  const props = createTestProps(mockProps);
  const wrapper = shallow<typeof StreamDetailView>(
    <StreamDetailView {...props} />
  );

  describe("rendering", () => {
    it("should render a <View />", () => {
      expect(wrapper.find("View")).toHaveLength(5);
    });

    it("should render the Title", () => {
      const result = wrapper.find("Text").first().props().children;
      expect(result).toEqual(mockProps.title);
    });

    it("should render the viewers number", () => {
      const result = wrapper.find("Text").at(1).props().children;
      expect(result).toEqual(["Viewers: ", mockProps.viewers]);
    });

    it("should render description text", () => {
      const result = wrapper.find("Text").at(3).props().children;
      expect(result).toEqual(mockProps.description);
    });
  });
});
