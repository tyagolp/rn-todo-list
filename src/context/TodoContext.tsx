import { createContext, ReactNode, useEffect, useState } from "react";
import uuid from "react-native-uuid";

import {
  storageTodoListGet,
  storageTodoListSave,
} from "@storage/storageTodoList";

export type ListDTO = {
  id: string;
  title: string;
  isChecked: boolean;
};

export type TodoContextDataProps = {
  data: ListDTO[];
  createItem: (title: string) => Promise<void>;
  onCheckItem: (id: string) => Promise<void>;
  unCheckItem: (id: string) => Promise<void>;
  deleteItem: (id: string) => Promise<void>;
  isLoadingStorageData: boolean;
};

type TodoContextProviderProps = {
  children: ReactNode;
};

export const TodoContext = createContext<TodoContextDataProps>(
  {} as TodoContextDataProps
);

export function TodoContextProvider({ children }: TodoContextProviderProps) {
  const [data, setData] = useState<ListDTO[]>([]);
  const [isLoadingStorageData, setIsLoadingStorageData] = useState(true);

  async function createItem(title: string) {
    setIsLoadingStorageData(true);

    try {
      const id = uuid.v4().toString();

      setData((x) => [
        ...x,
        {
          id,
          isChecked: false,
          title,
        },
      ]);

      await storageTodoListSave(data);
    } catch (error) {
    } finally {
      setIsLoadingStorageData(false);
    }
  }
  async function onCheckItem(id: string) {
    setIsLoadingStorageData(true);
    try {
      const itens = data.map((x) => {
        if (x.id === id) {
          x.isChecked = true;
        }
        return x;
      });
      setData(itens);
      await storageTodoListSave(data);
    } catch (error) {
    } finally {
      setIsLoadingStorageData(false);
    }
  }
  async function unCheckItem(id: string) {
    setIsLoadingStorageData(true);
    try {
      const itens = data.map((x) => {
        if (x.id === id) {
          x.isChecked = false;
        }
        return x;
      });
      setData(itens);
      await storageTodoListSave(data);
    } catch (error) {
    } finally {
      setIsLoadingStorageData(false);
    }
  }
  async function deleteItem(id: string) {
    setIsLoadingStorageData(true);
    try {
      setData((x) => [...x.filter((y) => y.id !== id)]);
      await storageTodoListSave(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingStorageData(false);
    }
  }

  async function loadData() {
    try {
      setIsLoadingStorageData(true);
      const data = await storageTodoListGet();
      setData(data);
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingStorageData(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        data,
        createItem,
        onCheckItem,
        unCheckItem,
        deleteItem,
        isLoadingStorageData,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
