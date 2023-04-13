import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Background from "./Background";
import * as Animatable from "react-native-animatable";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const ScreenTwo = (props) => {
  return (
    <View>
      <Background />

      <Animatable.View
        animation="bounceInRight"
        iterationCount={20}
        direction="alternate"
        style={{
          height: responsiveHeight(22),
          width: responsiveWidth(50),
          position: "absolute",
          marginTop: responsiveHeight(3),
          marginLeft: responsiveWidth(19),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={require("../assets/images/avtar2.png")}
          style={{
            width: 90,
            height: 90,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: "yellow",
          }}
        />
        <View style={{ marginLeft: 50 }}>
          <Text style={{ fontSize: responsiveFontSize(4), color: "yellow" }}>
            D-Lister
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              color: "#737373",
              textAlign: "center",
            }}
          >
            Sally
          </Text>
        </View>
      </Animatable.View>

      <Text
        style={{
          position: "absolute",
          marginTop: responsiveHeight(24),
          color: "#d5c300",
          fontSize: responsiveFontSize(3.3),
          marginLeft: responsiveWidth(23),
          fontWeight: "bold",
          textShadowColor: "rgba(255, 0, 0, 0.75)",
          textShadowOffset: { width: -3, height: 3 },
          textShadowRadius: 10,
        }}
      >
        Gave U Some Love
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
        15000
      </Text>
      <TouchableOpacity
        style={{
          position: "absolute",
          marginTop: responsiveHeight(70),
          marginLeft: responsiveWidth(76),
        }}
        onPress={() => props.navigation.navigate("ScreenThree")}
      >
        <Image
          style={{
            width: responsiveWidth(10),
            height: responsiveHeight(6),
          }}
          source={require("../assets/images/arrow.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ScreenTwo;

const styles = StyleSheet.create({});
