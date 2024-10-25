import { StyleSheet } from "react-native";
import { THEME } from "../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: THEME.COLORS.GREY_600,
  },

  card: {
    display: "flex",
    flex: 1,
    padding: 16,
  },

  labelsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
  },

  listContainer: {
    display: "flex",
    gap: 8,
  },

  emptyContainer: {
    borderTopWidth: 1,
    borderTopColor: THEME.COLORS.GREY_300,
    paddingTop: 20,
    flex: 1,
    display: "flex",
    alignItems: "center",
  },

  emptyTitle: {
    paddingTop: 10,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: THEME.SIZES.MD,
    color: THEME.COLORS.GREY_300,
  },
  emptyDescription: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: THEME.SIZES.MD,
    color: THEME.COLORS.GREY_300,
  },
});
