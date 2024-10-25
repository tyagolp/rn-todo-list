import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 54,
    padding: 16,
    borderRadius: 8,
    backgroundColor: THEME.COLORS.GREY_500,
    color: THEME.COLORS.GREY_100,
    textDecorationColor: THEME.COLORS.GREY_200,
  },
});
