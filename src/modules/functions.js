module.exports = (client) => {
  const mysql = require("mysql2");
var con = mysql.createConnection({
    host: client.config.mysqlh,
     user: client.config.mysqlu,
  password: client.config.mysqlp, database: client.config.mysqldb, port: client.config.mysqlpor});
  //sql
  client.guildjoinadd = (guildid, guildname, guildcreatedAt, guildownerID, guildowner) =>{
   // console.log(guildid, guildname, guildcreatedAt, guildownerID, guildowner);
    con.query('INSERT INTO guilds (prefix, guildid, guildname, guildcreatedAt, guildownerID, guildowner) VALUES (?,?,?,?,?,?)',
    ["!", guildid, guildname, guildcreatedAt, guildownerID, guildowner],
    function(err, res) {
      if (err){
        
        return console.log(err);
    } 
    else{
        console.log("Record Inserted");
    // ...
}
  }
);
  };
  function select(query, callback) 
{
    con.query(query,function(err,rows){
        if(err) throw err;
        return callback(rows);
    });
}
module.exports = {
  select: select
}
  //errors
  process.on("uncaughtException", (err) => {
    const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
    console.error("Uncaught Exception: ", errorMsg);
    // Always best practice to let the code crash on uncaught exceptions.
    // Because you should be catching them anyway.
    process.exit(1);
  });

  process.on("unhandledRejection", err => {
    console.error("Uncaught Promise Error: ", err);
  });
  
};

