import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  View,
  Dimensions,
  ImageBackground,
  Text,
  Image,
} from "react-native";

export default function ViewImageScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "#fc5c65",
            width: "20%",
            height: 80,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#4ECDC4",
            width: "20%",
            height: 80,
          }}
        ></View>

        <Image
          source={require("../assets/chair.jpg")}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%'
  },
  text: {
    color: "black",
    fontSize: 12,
    top: 70,
  },
  contentCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    top: 60,
    width: 100,
    height: 100,
  },
});
