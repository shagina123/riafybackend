const db = require('../services/db');

async function getResult(key){
    
  
  const data = await db.query('SELECT * FROM nse where name like "'+key+'%"');

  return {
    data
   
  }
}
   
function login(uname,pswd){
       if(uname==="Batman" && pswd=="Iambatman")     
          {
             console.log(uname)

            return{
                
                statusCode:200,
                message:"success!"
            }
          }
        return{
                
            statusCode:400,
            message:"User doesnt exist!"
        } 
    
   
}
async function getNames(key){
    console.log(key)
  
  const data = await db.query('SELECT name FROM nse where name like "'+key+'%"');

  return {
    data
   
  }
}

module.exports = {
  getResult,getNames,login
}