import mysql from 'mysql2'

const db = mysql.createPool({
host:"localhost",
user:"root",
port:3306,
database:"Productsdata",
password:"--------------"
})


db.getConnection((error,connection)=>{
    if(error){
        console.log('there is error to cannect the database')
    }else{
        connection.release();
        console.log("database is cannected");
    }
})

export default db.promise();