import type { Context } from "hono";
import * as todoModel from "../model/todo.model.ts";

type Todobody = {
    name: string,
    success: false,
}

type editTodo = {
    id: number,
    newName: string,
}

const GetTodo = async(c: Context) => {
  try {
    const data = await todoModel.GetTodo();
    return c.json(data);
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const AddTodo = async(c: Context) => {
  try {
    const body = await c.req.json<Todobody>();
      if (!body.name)
          return c.json(
              {
                  success: false,
                  data: null,
                  msg: "Missing required fields",
              },
              400
          );
      const newTodo = await todoModel.AddTodo(body.name);
      return c.json({
          success: true,
          data: newTodo,
          msg: "Added new Todo!",
      });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const EditTodoName = async(c: Context) => {
  try {
      const edit = await c.req.json<editTodo>()
      if (!edit.id || !edit.newName)
          return c.json(
              {
                  success: false,
                  data: null,
                  msg: "Missing required fields",
              },
              400
          );
      const editedTodo = await todoModel.EditTodo(edit.id, edit.newName);
      return c.json({
          success: true,
          data: editedTodo,
          msg: "Todo edited successfully!",
      });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const CompleteTodo = (c: Context) => {
  try {
      const id = c.req.query("id");
      if (id) {
        const completed = todoModel.SuccessTodo(parseInt(id))
          return c.json(
              {
                  success: true,
                  id: id,
                  completedTodo: completed,
              }
          );
      }
      return c.json({
          success: false,
          msg: "Missing required field",
      })
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const DeleteTodo = (c: Context) => {
  try {
      const id = c.req.query("id");
      if (id) {
          const deleted = todoModel.DeleteTodo(parseInt(id));
          return c.json({
              success: true,
              data: deleted,
              msg: "Deleted successfully",
          })
      }
      return c.json({
          success: false,
          msg: "Missing required field",
      })
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

export { GetTodo, AddTodo, EditTodoName, CompleteTodo, DeleteTodo };
