import { StyleSheet, View, ImageBackground, Image } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const Baground = () => {
  return (
    <View>
      <ImageBackground
        resizeMode="stretch"
        source={require("../assets/images/award_bg.png")}
        style={{ height: "100%", width: "100%" }}
      />
      <Image
        source={require("../assets/images/girlClap.png")}
        style={{
          position: "absolute",
          height: responsiveHeight(40),
          width: responsiveWidth(46),
          marginTop: responsiveHeight(51),
          marginLeft: responsiveWidth(28),
        }}
      />
      <Image
        source={require("../assets/images/awardPlatform.png")}
        style={{
          position: "absolute",
          height: responsiveHeight(13),
          width: "100%",
          marginTop: responsiveHeight(88),
        }}
      />
    </View>
  );
};

export default Baground;

const styles = StyleSheet.create({});
