import { TodoItemDataT } from "@/types/TodoItemDataT";





export const getTodoItemsFromStorage = (): TodoItemDataT[] => {
    const items = window.localStorage.getItem("todoItems")
    if (items) {
        return JSON.parse(items)
    }
    return []
}


export const setTodoItemsToStorage = (items: TodoItemDataT[]) => {
    window.localStorage.setItem("todoItems", JSON.stringify(items))
}

export const addItemToLocalStorage = (item: TodoItemDataT) => {
    let prevItems = getTodoItemsFromStorage()
    prevItems = [...prevItems, item]
    setTodoItemsToStorage(prevItems)
}