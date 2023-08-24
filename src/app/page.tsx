import TodoInput from "@/components/TodoInput";
import TodoItemsList from "@/components/TodoItemsList";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <div className="">
      <TopBar />
      <div className="border border-gray-500 rounded-md max-w-md mx-auto p-10 mt-4">
        <TodoInput />
        <TodoItemsList />
      </div>
    </div>
  );
}
