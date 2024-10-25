import AsyncStorage from "@react-native-async-storage/async-storage";

const NAME_STORAGE = "@rntodolist:itens";

type ItemProps = {
  id: string;
  title: string;
  isChecked: boolean;
}[];

export async function storageTodoListSave(items: ItemProps) {
  await AsyncStorage.setItem(NAME_STORAGE, JSON.stringify(items));
}

export async function storageTodoListGet() {
  const response = await AsyncStorage.getItem(NAME_STORAGE);
  const items: ItemProps = response ? JSON.parse(response) : [];

  return items;
}
