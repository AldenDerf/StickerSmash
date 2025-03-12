import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
const PlaceHolderImage = require('@/assets/images/background-image.jpg');

export default function Index() {
 
  return (
    <View style={styles.container}>
      <Image source={PlaceHolderImage} style={styles.image} />
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
   image: {
    width: 320,
    height: 440,
    borderRadius: 18,
   }
 });