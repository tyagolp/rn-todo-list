import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 52,
    height: 52,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.COLORS.BLUE_DARK,
  },

  title: {
    color: THEME.COLORS.GREY_100,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: THEME.SIZES.MD,
  },
});
