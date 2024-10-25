import { Check, Circle, Trash2 } from "lucide-react-native";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { THEME } from "../../styles/theme";
import { styles } from "./styles";
import { ListDTO } from "../../context/TodoContext";
import { useTodo } from "@hooks/useTodo";
import { Option } from "@components/Option";

type Props = {
  data: ListDTO;
};

export function ListItem({ data: { id, isChecked, title } }: Props) {
  const { deleteItem, onCheckItem, unCheckItem } = useTodo();

  function handleDelete() {
    // deleteItem(id);
    Alert.alert("Aviso!", "Deseja realmente excluir essa tarefa?", [
      {
        text: "Não",
      },
      {
        text: "Sim",
        onPress: () => {
          deleteItem(id);
        },
      },
    ]);
  }

  // if (isChecked)
  //   return (
  //     <View style={styles.container}>
  //       <TouchableOpacity
  //         onPress={() => {
  //           unCheckItem(id);
  //         }}
  //         style={{
  //           height: 24,
  //           width: 24,
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //         <View
  //           style={{
  //             backgroundColor: THEME.COLORS.PURPLE,
  //             borderRadius: 50,
  //             padding: 2,
  //           }}
  //         >
  //           <Check size={12} color={THEME.COLORS.GREY_100} strokeWidth={3} />
  //         </View>
  //       </TouchableOpacity>
  //       <Text style={styles.descriptionChecked}>{title}</Text>
  //       <TouchableOpacity onPress={handleDelete}>
  //         <Trash2 size={16} color={THEME.COLORS.GREY_200} />
  //       </TouchableOpacity>
  //     </View>
  //   );

  return (
    <View style={styles.container}>
      <Option
        isChecked={isChecked}
        onPress={() => {
          isChecked ? unCheckItem(id) : onCheckItem(id);
        }}
      />
      <Text style={isChecked ? styles.descriptionChecked : styles.description}>
        {title}
      </Text>
      <TouchableOpacity onPress={handleDelete}>
        <Trash2 size={16} color={THEME.COLORS.GREY_200} />
      </TouchableOpacity>
    </View>
  );
}
