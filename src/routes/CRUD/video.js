const express = require('express');
const path = require("path");
const routes = express.Router();
const videoController = require(path.resolve("src","controllers","video"));
const upload = require(path.resolve("config","multer"));
const auth = require(path.resolve("src","middlewares","auth"))

routes.post("/video",upload.single('imagem'),auth,videoController.videoStore);
routes.get("/explicando",videoController.getVideo);
routes.get("/video/:id",videoController.getVideoPerID);
routes.delete("/video/:id",videoController.deleteVideo);
routes.get("/videoAdmin",videoController.getAdmin);
routes.get("/videoEditar/:id",videoController.getVideoPerIDadmin);
routes.put("/videoEditar/:id",upload.single("imagem"),videoController.putVideo)


module.exports = routes;