import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../data/teamData";

export default function TeamLogo({ size = 120 }) {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <View style={[styles.shield, { width: size, height: size }]}>
        <View
          style={[styles.stripe, styles.yellowStripe, { width: size * 0.8, height: size * 0.26 }]}
        />
        <View
          style={[styles.stripe, styles.blueStripe, { width: size * 0.8, height: size * 0.26 }]}
        />
        <View
          style={[styles.stripe, styles.redStripe, { width: size * 0.8, height: size * 0.26 }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  shield: {
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: COLORS.black,
    backgroundColor: COLORS.white,
  },
  stripe: {
    position: "absolute",
  },
  yellowStripe: {
    backgroundColor: COLORS.yellow,
    top: "5%",
  },
  blueStripe: {
    backgroundColor: COLORS.blue,
    top: "37%",
  },
  redStripe: {
    backgroundColor: COLORS.red,
    bottom: "5%",
  },
});
