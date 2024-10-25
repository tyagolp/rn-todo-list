import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  color: "blue" | "purple";
  title: string;
  count: number;
};

export function LabelItem({ count, title, color }: Props) {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          color === "blue" ? styles.titleBlue : styles.titlePurple,
        ]}
      >
        {title}
      </Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
}
