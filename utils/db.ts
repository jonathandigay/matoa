import mongoose from "mongoose";

export const Connectiondb = () => {
  mongoose
    .connect(
      "mongodb+srv://nextjs:nextjs@cluster0.st8wi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then((res) => {
      console.log("comected");
    })
    .catch((res) => {
      console.log("err:", res);
    });
};
