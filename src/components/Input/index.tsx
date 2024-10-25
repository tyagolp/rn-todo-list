import { View, Text, TextInputProps, TextInput } from "react-native";
import { styles } from "./styles";
import { THEME } from "../../styles/theme";

type Props = TextInputProps & {};

export function Input({ ...rest }: Props) {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor={THEME.COLORS.GREY_300}
      cursorColor={THEME.COLORS.GREY_100}
      {...rest}
    />
  );
}
