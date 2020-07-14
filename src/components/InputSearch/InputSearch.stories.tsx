import { storiesOf } from "@storybook/react-native";
import React from "react";
import { InputSearch } from "./InputSearch";
import { View } from "react-native";
import { Colors } from "styles/colors";

storiesOf("InputSearch", module).add("default component", () => (
  <View style={{ padding: 40, flex: 1 }}>
    <InputSearch
      value="InputSearch"
      onChangeText={(value) => false}
      onSubmitValue={(value) => false}
      onClear={() => false}
    />
  </View>
));
