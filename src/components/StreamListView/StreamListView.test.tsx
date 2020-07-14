import { shallow } from "enzyme";
import React from "react";
import { StreamListView, IStreamListView } from "./StreamListView";
import { list } from "../../../__mocks__/stream-list";
import { FlatListProps } from "react-native";
import { Stream } from "interfaces/stream.interfaces";
import { IEmptyState } from "components/EmptyState/EmptyState";

jest.mock("@expo/vector-icons", () => {
  const { View } = require("react-native");
  return {
    Ionicons: View,
    createIconSet: View,
  };
});

const createTestProps = (props: IStreamListView) => ({
  ...props,
});

const mockProps = {
  streamList: list.streams,
  initialState: false,
  loading: false,
  error: false,
  initialInputValue: "",
  onPressItem: jest.fn(),
  onChangeText: jest.fn(),
  onSubmitValue: jest.fn(),
  onClearInput: jest.fn(),
  pickerList: [],
  initialPickerValue: "20",
  onPickerChange: jest.fn(),
  onPressRefresh: jest.fn(),
};

describe("StreamListView Component", () => {
  const props = createTestProps(mockProps);
  const wrapper = shallow<typeof StreamListView>(<StreamListView {...props} />);

  describe("rendering", () => {
    it("should render a <View />", () => {
      expect(wrapper.find("View")).toHaveLength(3);
    });

    it("should render the correct list number", () => {
      const result = wrapper.find("FlatList").first().props() as FlatListProps<
        Stream
      >;
      expect(result.data?.length).toEqual(23);
    });

    it("should return EmptyState Component with the error type", () => {
      const errorWrapper = shallow<typeof StreamListView>(
        <StreamListView {...props} error={true} streamList={[]} />
      );
      const result = errorWrapper
        .find("EmptyState")
        .first()
        .props() as IEmptyState;
      expect(result.type).toEqual("error");
    });

    it("should return EmptyState Component with the initial type", () => {
      const initialWrapper = shallow<typeof StreamListView>(
        <StreamListView {...props} initialState={true} streamList={[]} />
      );
      const result = initialWrapper
        .find("EmptyState")
        .first()
        .props() as IEmptyState;
      expect(result.type).toEqual("initial");
    });

    it("should return Loading Component", () => {
      const loadingWrapper = shallow<typeof StreamListView>(
        <StreamListView {...props} loading={true} streamList={[]} />
      );
      expect(loadingWrapper.find("Loading")).toHaveLength(1);
    });
  });
});
