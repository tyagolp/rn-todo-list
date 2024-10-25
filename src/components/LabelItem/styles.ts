import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },

  title: {
    fontSize: THEME.SIZES.MD,
    fontFamily: THEME.FONTS.BOLD,
  },

  titleBlue: {
    color: THEME.COLORS.BLUE,
  },
  titlePurple: {
    color: THEME.COLORS.PURPLE,
  },

  count: {
    borderRadius: 100,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 8,
    paddingLeft: 8,
    color: THEME.COLORS.GREY_100,
    fontSize: THEME.SIZES.SM,
    fontFamily: THEME.FONTS.BOLD,
    backgroundColor: THEME.COLORS.GREY_400,
  },
});
