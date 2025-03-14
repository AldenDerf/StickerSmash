import React from "react";
import { Link, Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
 
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }}/>
        <View style={styles.container}>
            <Link href="/" style={styles.button}>
                Go back to Home screen!
            </Link>
        </View>
     
    </>
  );
}

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: "center",
     backgroundColor: "#25292e",
     alignItems: "center",
   },
   text: {
     color: "#fff",
   },
   button: {
     fontSize: 20,
     textDecorationLine: "underline",
     color: "#fff",
   },
 });