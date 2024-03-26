// Starter Code

const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err.message));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const getData = async () => {
    let res = await Post.find({}).populate("user", "username");
    console.log(res);
};
getData();
// addData();

// const del = async () => {
//     await Post.findByIdAndDelete('66026bc9919c61769eccebd9');
//     await User.findByIdAndDelete("66026bc9919c61769eccebd9");
// }

// del();
