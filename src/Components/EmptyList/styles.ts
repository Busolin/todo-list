import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listEmptyContainer: {
    paddingTop: 48,
    paddingHorizontal: 20,

    width: "100%",
    justifyContent: "center",
    alignItems: "center",

    gap: 24,
  },

  listEmptyContainerText: {
    color: "#808080",
    fontSize: 14,
    fontFamily: "Inter-Regular",
    lineHeight: 22,
  },
  listEmptyContainerTextBold: {
    fontFamily: "Inter-Bold",
  },
});
