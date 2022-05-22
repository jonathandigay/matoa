import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
});

export const Todolistmodule = mongoose.model("Todolists", TodoSchema);
