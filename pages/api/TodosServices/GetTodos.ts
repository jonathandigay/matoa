import type { NextApiRequest, NextApiResponse } from "next";

interface props {
  Todolistmodule: any;
  res: NextApiResponse;
  req: NextApiRequest;
}
export const GetTodos = async ({ Todolistmodule, res, req }: props) => {
  try {
    let datas = await Todolistmodule.find();

    res.status(200).json({ message: "This is GET method", Body: datas });
  } catch (e: any) {
    res.status(400).json({ message: "This is GET method", Body: e.toString() });
  }
};
