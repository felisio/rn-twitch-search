import React from "react";
import { View, Text } from "react-native";
import { styles } from "./StreamPlayer.styles";
import WebView from "react-native-webview";

export interface IStreamPlayer {
  uri: string;
}

const StreamPlayer: React.FC<IStreamPlayer> = ({ uri }) => {
  return (
    <View style={styles.view}>
      <WebView
        style={styles.videoView}
        scrollEnabled={false}
        source={{
          uri,
        }}
      />
    </View>
  );
};

export { StreamPlayer };
