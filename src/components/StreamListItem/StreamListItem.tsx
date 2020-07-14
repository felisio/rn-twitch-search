import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./StreamListItem.styles";

export interface IStreamListItem {
  title: string;
  image: string;
  onPressItem: () => void;
}

const StreamListItem: React.FC<IStreamListItem> = ({
  title,
  image,
  onPressItem,
}) => {
  return (
    <TouchableOpacity style={styles.view} onPress={onPressItem}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: image }} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export { StreamListItem };
