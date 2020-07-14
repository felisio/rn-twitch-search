import { storiesOf } from "@storybook/react-native";
import React from "react";
import { StreamDetailView } from "./StreamDetailView";

storiesOf("StreamDetailView", module).add("default component", () => (
  <StreamDetailView
    title="StarCraft II"
    description="Russian voice of StarCraft II. Mathematician, esports manager and commentator."
    uri="https://www.twitch.tv/alex007sc2"
    viewers={1717}
  />
));
