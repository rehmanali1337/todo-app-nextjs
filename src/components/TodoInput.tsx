"use client";

import useLocalStorage from "@/customHooks/useLocalStorage";
import { TodoItemDataT } from "@/types/TodoItemDataT";
import { useState } from "react";
import { ChangeEvent } from "react";
import { RiAddLine } from "react-icons/ri";

export default function TodoInput() {
  const [todoItems, setTodoItems] = useLocalStorage<TodoItemDataT[]>(
    "todoItems",
    []
  );
  const [todoTitle, setTodoTitle] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  const handleSubmit = () => {
    if (todoTitle) {
      setTodoItems([...todoItems, { title: todoTitle, description: "" }]);
      window.location.reload();
    }
  };

  return (
    <div className="max-w-lg mx-auto inline-flex gap-4 mb-4">
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="New Todo"
        required
        value={todoTitle}
        onChange={handleChange}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      <button
        className="border border-gray-400 bg-gray-500 hover:bg-gray-600 p-3 rounded-md text-white"
        onClick={handleSubmit}
      >
        <RiAddLine />
      </button>
    </div>
  );
}
