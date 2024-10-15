import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoList } from "./toDoList";

describe("ToDoList CRUD operations", () => {
  // Read test: Check if all items are displayed in the list
  test("displays all items in the To-Do list", () => {
    render(<ToDoList />);

    const input = screen.getByPlaceholderText("Add new task");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: "Task 2" } });
    fireEvent.click(addButton);

    // Assert that both tasks are displayed
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
  });

  // Test the number of checked items
  test("updates the count of checked tasks", () => {
    render(<ToDoList />);

    const input = screen.getByPlaceholderText("Add new task");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: "Task 2" } });
    fireEvent.click(addButton);

    const checkbox1 = screen.getByTestId("checkbox-1");  // Targets first task checkbox
    fireEvent.click(checkbox1);  // Check the first task

    // Assert that 1 item is completed by checking the "Items bought" display
    const itemsBoughtElement = screen.getByTestId("items-bought");
    expect(itemsBoughtElement).toHaveTextContent("Items bought: 1");
  });
});