"use client";
import { TodoItemDataT } from "@/types/TodoItemDataT";
import TodoItem from "./TodoItem";
import useLocalStorage from "@/customHooks/useLocalStorage";

export default function TodoItemsList() {
  const [todoItems, setItems] = useLocalStorage<TodoItemDataT[]>(
    "todoItems",
    []
  );
  const items = todoItems.map((item) => (
    <TodoItem key={item.title} data={item} />
  ));
  return <div className="p-2">{items}</div>;
}
