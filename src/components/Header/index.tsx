import { View, Image } from "react-native";
import { styles } from "./styles";

import Logo from "../../assets/toDoList.png";
import { Input } from "../Input";
import { Button } from "../Button";
import { useTodo } from "@hooks/useTodo";
import { useState } from "react";

export function Header() {
  const [title, setTitle] = useState("");
  const { createItem } = useTodo();

  async function onCreateItem() {
    if (title.length) await createItem(title);
    setTitle("");
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Logo} />
      <View style={styles.groupControls}>
        <Input
          placeholder="Adicione uma nova tarefa"
          onChangeText={setTitle}
          value={title}
        />
        <Button IconName="CirclePlus" onPress={onCreateItem} />
      </View>
    </View>
  );
}
