import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "#1A1A1A",
    flex: 1,
    color: "#fff",
  },
  homeHeaderBackground: {
    position: "absolute",
    top: 0,
    content: "",
    width: "100%",
    height: 172,
    backgroundColor: "#0D0D0D",
    zIndex: -1,
  },
  homeHeader: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoWrapper: {
    marginTop: 64,
    marginBottom: 48,
  },
  inputWrapper: {
    flexDirection: "row",
    gap: 4,
    height: 54,
    marginHorizontal: 24,
  },
  inputNewTask: {
    borderRadius: 6,
    height: "100%",
    flex: 1,
    padding: 16,
    backgroundColor: "#262626",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#0D0D0D",

    color: "#F2F2F2",

    fontSize: 16,
    lineHeight: 22,
    fontFamily: "Inter-Regular",
  },
  addButton: {
    height: "100%",
    width: 54,
    padding: 16,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",

    alignItems: "center",
    justifyContent: "center",
  },

  homeContent: {
    marginHorizontal: 24,
    marginTop: 32,
  },

  tasksMeter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderBottomWidth: 1,
    borderBottomColor: "#333333",
    borderBottomStyle: "solid",

    paddingBottom: 20,
  },
  tasksMeterWithTasks: {
    marginBottom: 20,
  },

  taskInformation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  taskType: {
    color: "#4EA8DE",
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },
  taskCompleted: {
    color: "#8284FA",
  },

  taskMeterContainer: {
    backgroundColor: "#333333",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 100,
  },
  taskMeter: {
    color: "#D9D9D9",
    fontSize: 12,
    fontFamily: "Inter-Bold",
  },

  // Why?
  tasksContainer: {
    height: "80%",
    paddingBottom: 20,
  },
});
