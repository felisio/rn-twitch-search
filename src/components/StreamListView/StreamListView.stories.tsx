import { storiesOf } from "@storybook/react-native";
import React from "react";
import { StreamListView } from "./StreamListView";
import { list } from "../../../__mocks__/stream-list";

storiesOf("StreamListView", module).add("default component", () => (
  <StreamListView
    streamList={list.streams}
    initialState={false}
    loading={false}
    error={false}
    initialInputValue=""
    onPressItem={(item) => false}
    onChangeText={(value) => false}
    onSubmitValue={(value) => false}
    onClearInput={() => false}
  />
));
