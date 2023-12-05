const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

//Index Route
app.get("/chats", async (req, res) => {
  try {
    const chats = await Chat.find({});
    res.render("index.ejs", { chats });
  } catch (err) {
    next(err);
  }
});

// New Route
app.get("/chats/new", (req, res) => {
  //   throw new ExpressError(404, "Page Not Found");
  res.render("new.ejs");
});

// Create Route
app.post("/chats", (req, res, next) => {
  let { from, to, message } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    message: message,
    created_at: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      console.log("Chat saved successfully");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

// asyncWrap function
function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

//NEW - Show Route
app.get("/chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
      throw new ExpressError(404, "Chat not found");
    }
    res.render("edit.ejs", { chat });
  } catch (err) {
    next(err);
  }
});

//Edit Route
app.get("/chats/:id/edit", async (req, res) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  } catch (err) {
    next(err);
  }
});

//Update Route
app.put("/chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { message: newMsg } = req.body;
    let updateChat = await Chat.findByIdAndUpdate(
      id,
      { message: newMsg },
      { runValidators: true, new: true }
    );
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

//Delete Route
app.delete("/chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

//Home Route
app.get("/", (req, res) => {
  res.send("Root is working");
});

//Error Handling Middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).send(message);
});

app.listen(8080, () => console.log("Server running on port 8080"));
