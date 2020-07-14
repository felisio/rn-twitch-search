import { shallow } from "enzyme";
import React from "react";
import { ToolsBar, IToolsBar } from "./ToolsBar";
import { PickerSelectProps } from "react-native-picker-select";

jest.mock("@expo/vector-icons", () => {
  const { View } = require("react-native");
  return {
    Ionicons: View,
  };
});

const createTestProps = (props: IToolsBar) => ({
  ...props,
});

const items = [
  { label: "25", value: "25" },
  { label: "20", value: "20" },
  { label: "10", value: "10" },
];

const mockProps = {
  pickerList: items,
  initialPickerValue: items[0].value,
  onPickerChange: jest.fn(),
  onPressRefresh: jest.fn(),
};

describe("ToolsBar Component", () => {
  const props = createTestProps(mockProps);
  const wrapper = shallow<typeof ToolsBar>(<ToolsBar {...props} />);

  describe("rendering", () => {
    it("should render a <View />", () => {
      expect(wrapper.find("View")).toHaveLength(2);
    });

    it("should print the correct list", () => {
      const result = wrapper
        .find("RNPickerSelect")
        .first()
        .props() as PickerSelectProps;

      expect(result.items).toEqual(items);
    });

    it("should be selected the correct value", () => {
      const selectedWrapper = shallow<typeof ToolsBar>(
        <ToolsBar {...props} initialPickerValue="20" />
      );
      const result = selectedWrapper
        .find("RNPickerSelect")
        .first()
        .props() as PickerSelectProps;

      expect(result.value).toEqual("20");
    });
  });
});
