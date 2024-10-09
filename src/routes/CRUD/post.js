const express = require('express');
const path = require("path");
const routes = express.Router();
const postController = require(path.resolve("src","controllers","post"));
const upload = require(path.resolve("config","multer"));
const auth = require(path.resolve("src","middlewares","auth"))

routes.post("/post",upload.single('imagem'),auth,postController.postStore);
routes.get("/blog",postController.getPost)
routes.get("/post/:id",postController.getPostPerID)
routes.delete("/post/:id",postController.deletePost)
routes.get("/postAdmin",postController.getAdmin);
routes.get("/postEditar/:id",postController.getPostPerIDadmin);
routes.put("/postEditar/:id",upload.single("imagem"),postController.putPost)

module.exports = routes;