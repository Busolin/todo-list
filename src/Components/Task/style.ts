import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "#262626",

    paddingHorizontal: 8,
    paddingVertical: 12,
    marginBottom: 8,

    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#333333",

    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  containerFirstChild: {
    marginTop: 20,
  },

  text: {
    fontFamily: "Inter-Regular",
    color: "#F2F2F2",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "left",
    flex: 1,
  },
  textTaskComplete: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
});
