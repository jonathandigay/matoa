import type { NextApiRequest, NextApiResponse } from "next";
import { Connectiondb } from "../../utils/db";
import { Todolistmodule } from "../../models/todolist";
// routes

import { GetTodos } from "./TodosServices/GetTodos";
import { PostTodos } from "./TodosServices/PostTodos";
import { UpdateTodos } from "./TodosServices/UpdateTodos";
import { RemoveTodos } from "./TodosServices/RemoveTodos";
Connectiondb();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.body.id;

  switch (req.method) {
    case "GET":
      GetTodos({ Todolistmodule, res, req });
      break;
    case "POST":
      PostTodos({ Todolistmodule, res, req });
      break;
    case "PUT":
      UpdateTodos({ Todolistmodule, res, req });
      break;
    case "DELETE":
      RemoveTodos({ Todolistmodule, res, req });
      break;
    default:
      null;
  }
}
