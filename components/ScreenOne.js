import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Background from "./Background";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const ScreenOne = () => {
  const [counter, setCounter] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
  return (
    <View>
      <Background />
      <Image
        source={require("../assets/images/castingLogo.png")}
        style={{
          width: responsiveWidth(25),
          height: responsiveHeight(14),
          position: "absolute",
          marginTop: responsiveHeight(13),
          marginLeft: responsiveWidth(36),
        }}
      />
      <Text
        style={{
          position: "absolute",
          color: "#ffffff",
          marginTop: responsiveHeight(21),
          marginLeft: responsiveWidth(41),
          fontSize: responsiveFontSize(2),
          transform: [{ rotate: "-15deg" }],
          fontWeight: "bold",
        }}
      >
        04:52:{counter}
      </Text>

      <Text
        style={{
          position: "absolute",
          marginTop: responsiveHeight(29),
          marginLeft: responsiveWidth(23),
          fontSize: 35,
          color: "purple",
          transform: [{ rotate: "-10deg" }],
        }}
      >
        CASTING CALL
      </Text>
      <Text
        style={{
          position: "absolute",
          marginTop: responsiveHeight(40),
          marginLeft: responsiveWidth(27),
          fontSize: 30,
          color: "#dee203",
        }}
      >
        The Result R In!
      </Text>
    </View>
  );
};

export default ScreenOne;

const styles = StyleSheet.create({});
