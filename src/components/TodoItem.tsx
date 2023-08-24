"use client";
import { TodoItemDataT } from "@/types/TodoItemDataT";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import useLocalStorage from "@/customHooks/useLocalStorage";
import { todo } from "node:test";

export default function TodoItem({ data }: { data: TodoItemDataT }) {
  const [checked, setChecked] = useState(false);
  const [items, setItems] = useLocalStorage<TodoItemDataT[]>("todoItems", []);

  const handleDelete = (title: string) => {
    let newItems: TodoItemDataT[] = items.filter(
      (item) => item.title !== title
    );
    setItems(newItems);
    window.location.reload();
  };

  return (
    <div className="mx-auto text-left border border-teal-400 m-4 bg-gray-500 p-2 rounded-lg">
      <div className="flex justify-stretch gap-4 text-left m-2 text-white">
        <input
          type="checkbox"
          name="checkbox"
          id="check"
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        />
        <span className="flex items-center space-x-4">
          <p
            className={`text-sm font-medium truncate dark:text-white ${
              checked ? "line-through" : ""
            }`}
          >
            {data.title}
          </p>
        </span>
        <button
          className="ml-auto text-xl hover:text-gray-200"
          onClick={() => {
            handleDelete(data.title);
          }}
        >
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
}
