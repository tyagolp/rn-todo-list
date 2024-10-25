import { useFonts } from "expo-font";
import Home from "./src/screens/Home";

import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { StatusBar, Text, View } from "react-native";
import { TodoContextProvider } from "./src/context/TodoContext";

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  if (!fontsLoaded) return <Text>Carregando</Text>;

  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <TodoContextProvider>
        <Home />
      </TodoContextProvider>
    </>
  );
}
