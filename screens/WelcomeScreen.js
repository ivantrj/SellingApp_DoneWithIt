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

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={
          require("../assets/background.jpg")}
      >
        <View style={styles.container}>
          <View style={styles.contentCenter}>
            <Image
              source={
                require("../assets/logo-red.png")
              }
              style={styles.logo}
            />
            <Text style={styles.text}>Sell What You Don't Need</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={{
        backgroundColor: '#fc5c65',
        width: '100%',
        height: 80,
      }}>
      </View>
      <View style={{
        backgroundColor: '#4ECDC4',
        width: '100%',
        height: 80,
      }}>
      </View>
    </View>
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
    top: 70,
  },
  contentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 60,
    width: 100,
    height: 100,
  },
});
