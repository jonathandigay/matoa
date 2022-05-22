import type { NextApiRequest, NextApiResponse } from "next";

interface props {
  Todolistmodule: any;
  res: NextApiResponse;
  req: NextApiRequest;
}
export const RemoveTodos = async ({ Todolistmodule, res, req }: props) => {
  const id = req.query.id;
  await Todolistmodule.findByIdAndDelete(id)
    .then((response: any) => {
      res
        .status(200)
        .json({ message: " remove collection with the id of" + id });
    })
    .catch((err: any) => {
      res.status(400).json({
        message:
          " cannot remone the collection with the id of " +
          id +
          " because of " +
          err +
          " .",
      });
    });
};
