import { shallow } from "enzyme";
import { render, fireEvent } from "react-native-testing-library";
import React from "react";
import { StreamListItem, IStreamListItem } from "./StreamListItem";
import { ImageProps } from "react-native";

const createTestProps = (props: IStreamListItem) => ({
  ...props,
});

const mockProps = {
  onPressItem: jest.fn(),
  title: "StarCraft II",
  image: "https://www.fillmurray.com/640/360",
};

describe("StreamListItem Component", () => {
  const props = createTestProps(mockProps);

  describe("rendering", () => {
    const wrapper = shallow<typeof StreamListItem>(
      <StreamListItem {...props} />
    );
    it("should render a <View />", () => {
      expect(wrapper.find("View")).toHaveLength(1);
    });

    it("should render the Title", () => {
      const result = wrapper.find("Text").first().props().children;
      expect(result).toEqual(mockProps.title);
    });

    it("should render image source", () => {
      const result = wrapper.find("Image").first().props() as ImageProps;
      expect(result.source).toEqual({ uri: mockProps.image });
    });
  });

  describe("Events", () => {
    it("should call press event", () => {
      const { getByText } = render(<StreamListItem {...props} />);
      fireEvent.press(getByText(mockProps.title));
      expect(mockProps.onPressItem).toHaveBeenCalled();
    });
  });
});
