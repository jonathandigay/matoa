import type { NextApiRequest, NextApiResponse } from "next";

interface props {
  Todolistmodule: any;
  res: NextApiResponse;
  req: NextApiRequest;
}
export const UpdateTodos = async ({ Todolistmodule, res, req }: props) => {
  const updateTodo = req.body.updateTodo;
  const id = req.query.id;
  await Todolistmodule.findByIdAndUpdate(id, { todo: updateTodo })
    .then((response: any) => {
      res.status(200).json({ message: "update todo with the id of " + id });
    })
    .catch((err: any) => {
      res.status(401).json({
        message:
          "cannot update  todo with the id of " + id + "because" + err + ".",
      });
    });
};
