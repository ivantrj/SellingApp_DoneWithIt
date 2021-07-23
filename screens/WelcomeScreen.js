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

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/background.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          {/* <Image
            source={require("../assets/logo-red.png")}
            style={styles.logo}
          ></Image> */}
          <Text style={styles.text}>Sell What You Don't Need</Text>
        </ImageBackground>
      </View>
      {/* <View
        style={{
          backgroundColor: "#fc5c65",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "#4ECDC4",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      ></View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 12,
  },
  logo: {
    height: 50,
    width: 100,
  },
});
