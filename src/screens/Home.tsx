import { Text, View } from "react-native";
import { styles } from "./styles";
import { Header } from "@components/Header";
import { LabelItem } from "@components/LabelItem";
import { ListIcon } from "lucide-react-native";
import { THEME } from "../styles/theme";
import { ListItem } from "@components/ListItem";
import { useTodo } from "@hooks/useTodo";

export default function Home() {
  const { data } = useTodo();

  const allCount = data.length;
  const finallyCount = data.filter((x) => x.isChecked).length;

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.card}>
        <View style={styles.labelsContainer}>
          <LabelItem title="Criadas" color="blue" count={allCount} />
          <LabelItem title="Concluídas" color="purple" count={finallyCount} />
        </View>
        {data.length ? (
          <View style={styles.listContainer}>
            {data.map((x) => (
              <ListItem key={x.id} data={x} />
            ))}
          </View>
        ) : (
          <View style={styles.emptyContainer}>
            <ListIcon size={56} color={THEME.COLORS.GREY_300} />
            <Text style={styles.emptyTitle}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyDescription}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
