const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


module.exports = async (req, res, next) => 
    {

    const tokenReady = await req.cookies.authorization;

    if (!tokenReady) {
        return res.redirect("/login")
      }
    
      try {
        
        try {
            await jwt.verify(tokenReady, process.env.TOKEN); // Adiciona os dados decodificados no objeto req
            
          } catch (err) {
            return res.status(401).json({ message: 'Token inválido ou expirado' });}
          
        next(); // Vai para a próxima função (a rota protegida)
      } catch (err) {
        return res.redirect('/login'); 
      }

}