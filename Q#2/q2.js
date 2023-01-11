const express = require("express");
const Post = require("./db/post");
require("./db/config");
const mongoose = require("mongoose")

const app = express();

app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/lab_terminal")

app.post("/posts", async (req, resp) => {
    let item = new Post();
    item.user = req.body.user;
    item.title = req.body.title;
    let response = await item.save();
    resp.send(response);
    
  });

  app.get("/", async (req, resp) => {
    let posts = await Post.find();
    resp.send(posts)
  });
  app.get("/:myposts", async (req, resp) => {
    let mypost=Post.find()
    .skip(3)
    .limit(2)
    resp.send(mypost)
  });

app.listen(8000);
