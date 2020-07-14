import { storiesOf } from "@storybook/react-native";
import React from "react";
import { StreamPlayer } from "./StreamPlayer";
import { View } from "react-native";

storiesOf("StreamPlayer", module).add("default component", () => (
  <View style={{ padding: 40, flex: 1 }}>
    <StreamPlayer uri="https://www.twitch.tv/esl_sc2" />
  </View>
));
