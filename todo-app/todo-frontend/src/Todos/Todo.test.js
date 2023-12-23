import React from "react"
import Todo from "./Todo"
import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"

describe("Todos", () => {
    const todo = {
        text: "test todo",
        done: false,
    }
    beforeEach(() => {
        var mockComplete = jest.fn()
        var mockDelete = jest.fn()
        render(
        <Todo todo={todo} deleteTodo={mockDelete} completeTodo={mockComplete}/>)
          .container
    })
    test("are shown on screen", async () => {
        expect(screen.getByText("test todo")).toBeDefined()
        expect(screen.getByText("Set as done")).toBeDefined()
    })
})