import { configure, getStorybookUI } from "@storybook/react-native";
import { loadStories } from "./storyLoader";

// import stories
configure(() => {
  require("./stories");
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: require("react-native").AsyncStorage || null,
});

export default StorybookUIRoot;
