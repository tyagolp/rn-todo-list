import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.GREY_700,
    height: 173,
    position: "relative",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  image: {
    height: 32,
    width: 110,
  },

  groupControls: {
    width: `90%`,
    position: "absolute",
    bottom: -20,
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
});
