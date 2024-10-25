import { TouchableOpacityProps, TouchableOpacity } from "react-native";
import { THEME } from "../../styles/theme";
import { styles } from "./styles";
import { icons } from "lucide-react-native";

type IconName = keyof typeof icons;

type Props = TouchableOpacityProps & {
  IconName: IconName;
  type?: "normal" | "delete";
  isClicked?: boolean;
};

export function Button({
  IconName,
  type = "normal",
  isClicked = false,
  ...rest
}: Props) {
  const Icon = icons[IconName];

  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <Icon size={16} color={THEME.COLORS.GREY_100} />
    </TouchableOpacity>
  );
}
