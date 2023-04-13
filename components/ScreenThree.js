import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Background from "./Background";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const ScreenThree = () => {
  const [counter, setCounter] = useState(15000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1000);
      if (counter == 40000) {
        setCounter(40000);
      }
    }, 1);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <View>
      <Background />
      <Text
        style={{
          position: "absolute",
          marginTop: 80,
          marginLeft: 70,
          fontSize: 35,
          textAlign: "center",
          fontWeight: "bold",
          textShadowColor: "rgba(185, 185, 185, 0.75)",
          textShadowOffset: { width: -2, height: 3 },
          textShadowRadius: 10,
          color: "yellow",
        }}
      >
        4 Friends Gave U Some Love
      </Text>
      <Image
        source={require("../assets/images/main-heart.png")}
        style={{
          position: "absolute",
          width: responsiveWidth(46),
          height: responsiveHeight(18),
          marginTop: responsiveHeight(32.2),
          marginLeft: responsiveWidth(26.5),
        }}
      />
      <Text
        style={{
          position: "absolute",
          color: "yellow",
          fontSize: responsiveFontSize(3.5),
          marginTop: responsiveHeight(39),
          marginLeft: responsiveWidth(38.9),
        }}
      >
        {counter}
      </Text>
    </View>
  );
};

export default ScreenThree;

const styles = StyleSheet.create({});
