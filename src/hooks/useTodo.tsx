import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export function useTodo() {
  const context = useContext(TodoContext);
  return context;
}
