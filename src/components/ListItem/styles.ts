import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: THEME.COLORS.GREY_500,
    borderWidth: 1,
    borderColor: THEME.COLORS.GREY_400,
    borderRadius: 8,
  },

  description: {
    flex: 1,
    fontSize: THEME.SIZES.SM,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.GREY_100,
  },

  descriptionChecked: {
    flex: 1,
    fontSize: THEME.SIZES.SM,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.GREY_300,
    textDecorationLine: "line-through",
  },
});
