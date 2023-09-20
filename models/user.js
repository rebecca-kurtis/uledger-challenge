import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    id: Number,
    first_name: String,
    last_name: String,
    title: String,
    department: String,
    group: Number,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
