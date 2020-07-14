import React from "react";
import { View, Text } from "react-native";
import { styles } from "./StreamDetailView.styles";
import { StreamPlayer } from "components/StreamPlayer/StreamPlayer";

export interface IStreamDetailView {
  title: string;
  description: string;
  viewers: number;
  uri: string;
}

const StreamDetailView: React.FC<IStreamDetailView> = ({
  title,
  description,
  viewers,
  uri,
}) => {
  return (
    <View style={styles.view}>
      <View>
        <StreamPlayer uri={uri} />
      </View>
      <View style={styles.titleView}>
        <View>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </View>
        <Text style={styles.viewers}>Viewers: {viewers}</Text>
      </View>
      <View style={styles.descView}>
        <Text style={styles.title}>Description:</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
    </View>
  );
};

export { StreamDetailView };
