const path = require("path");
const Video = require(path.resolve("src","database","Models","Video"));
const dotenv = require('dotenv');
const cloudinary = require(path.resolve("config", "cloudinary"));
dotenv.config();

class PostController{
    
    static async videoStore(req, res) {
        try {
          const imagem = await cloudinary.uploader.upload(req.file.path, {
            folder: "uploads",
          });
          const newVideo = await Video.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo,
            img: {
              url: imagem.url,
              public_id: imagem.public_id,
            },
          });
          res.status(201).json({ message: "Criado com sucesso!", Video: newVideo });
        } catch (erro) {
          res
            .status(500)
            .json({ message: `${erro.message} - Falha ao cadastrar Video` });
        }
      }

      static async getVideo(req, res) {
        try {
            Video.findAll().then((resultado) => {
              let achados = [];
              resultado.forEach((element) => {
                achados.push({
                  id: element.id,
                  titulo: element.titulo,
                  conteudo: element.conteudo,
                  img: element.img.url,
                  createdAt : element.createdAt,
                  updatedAt : element.updatedAt
      
                });
              });
              res.render('explicando', {videos:achados}); 
            });
          } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao ver Posts` });
          }
            


      }

      static async getVideoPerID(req, res) {
        try {
          const id = await Number(req.params.id);
          const findVideo = await Video.findByPk(id);
          res.render('video', {post:findVideo});
        } catch (erro) {
          res
            .status(500)
            .json({ message: `${erro.message} - Falha ao mostrar Post` });
        }
      }


      static async deleteVideo(req, res) {
        try {
          const id = await Number(req.params.id);
          const videoDelete = await Video.findByPk(id);
          videoDelete.destroy().then((message) => {
            res.status(200).json({ message: "Video deletado com sucesso." });
          });
        } catch (erro) {
          res
            .status(500)
            .json({ message: `${erro.message} - Falha ao deletar Video` });
        }
      }
  
}

module.exports = PostController