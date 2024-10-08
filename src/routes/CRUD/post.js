const express = require('express');
const path = require("path");
const routes = express.Router();
const postController = require(path.resolve("src","controllers","Post"));
const upload = require(path.resolve("config","multer"));
const auth = require(path.resolve("src","middlewares","auth"))

routes.post("/post",upload.single('imagem'),auth,postController.postStore);
routes.get("/blog",postController.getPost)
routes.get("/post/:id",postController.getPostPerID)
routes.delete("/post/:id",postController.deletePost)

module.exports = routes;