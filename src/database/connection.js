const path = require("path");

async function connection() {

    const db = require(path.resolve("config","db"));

    await db.sync().then(()=>{
        console.log("Connected DataBase");
    })
    .catch((e)=>{
        console.log(e);
    }
    )
}

module.exports = connection;