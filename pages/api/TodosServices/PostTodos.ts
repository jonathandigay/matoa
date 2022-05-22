import type { NextApiRequest, NextApiResponse } from "next";

interface props {
  Todolistmodule: any;
  res: NextApiResponse;
  req: NextApiRequest;
}
export const PostTodos = async ({ Todolistmodule, res, req }: props) => {
  await new Todolistmodule(req.body)
    .save()
    .then((res: any) => {
      console.log("added new todo");
    })
    .catch((err: any) => {
      console.log("Error to add:", err);
    });
  res.status(200).json({ message: "This is POST method", Body: req.body });
};
