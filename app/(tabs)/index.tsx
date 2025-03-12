import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
const PlaceHolderImage = require("@/assets/images/background-image.jpg");

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageViewer imgSource={PlaceHolderImage} />
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
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

  footerContainer: {
    flex: 1 / 2,
    alignItems: "center",
  },
});
