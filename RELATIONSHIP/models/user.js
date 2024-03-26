// Starter Code

const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err.message));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}


const userSchema = new Schema({
    username: String,
    addresses: [
        {
        _id: false,
        location: String,
        city: String,
        },
    ],
    });

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
    let user1 = new User({
        username: "user1",
        addresses: [
            { location: "221B Baker Street", city: "London" },
        ],
    });
    user1.addresses.push({ location: "742 Evergreen Terrace", city: "Springfield" });
    let result = await user1.save();
    console.log(result);
}

addUsers();