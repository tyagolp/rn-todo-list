import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { THEME } from "../../styles/theme";
import { Check, Circle } from "lucide-react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  isChecked?: boolean;
};

export function Option({ isChecked = false, ...rest }: Props) {
  if (isChecked)
    return (
      <TouchableOpacity
        style={[styles.container, styles.isCheckedBG]}
        {...rest}
      >
        <Check size={12} color={THEME.COLORS.GREY_100} strokeWidth={3} />
      </TouchableOpacity>
    );

  return (
    <TouchableOpacity style={[styles.container]} {...rest}>
      <Circle size={20} color={THEME.COLORS.BLUE} />
    </TouchableOpacity>
  );
}
