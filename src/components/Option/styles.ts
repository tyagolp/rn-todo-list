import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 24,
    width: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  isCheckedBG: {
    borderRadius: 50,
    backgroundColor: THEME.COLORS.PURPLE,
  },
});
