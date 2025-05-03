import { Hono } from "hono";
import * as todoController from "../controller/todo.controller.ts";

const todoRouter = new Hono();

// @ts-ignore
todoRouter.get("/getTodo", todoController.GetTodo);
// @ts-ignore
todoRouter.post("/addTodo", todoController.AddTodo);
// @ts-ignore
todoRouter.patch("/editTodo", todoController.EditTodoName);
// @ts-ignore
todoRouter.patch("/completeTodo", todoController.CompleteTodo);
// @ts-ignore
todoRouter.delete("/deleteTodo", todoController.DeleteTodo);

export { todoRouter };
