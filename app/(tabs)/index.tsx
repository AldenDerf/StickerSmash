import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
const PlaceHolderImage = require("@/assets/images/background-image.jpg");

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageViewer imgSource={PlaceHolderImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
});
