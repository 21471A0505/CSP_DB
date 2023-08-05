// let connection;
// var oracledb = require('oracledb');

// (async function() {
// try{
//    connection = await oracledb.getConnection({
//         user : 'system',
//         password : 'admin',
//         connectString : 'localhost:1521/XE'
//    });
//    console.log("Successfully connected to Oracle!")
// } catch(err) {
//     console.log("Error: ", err);
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch(err) {
//         console.log("Error when closing the database connection: ", err);
//       }
//     }
//   }

// })()







const oracledb = require("oracledb");
// Set database connection details
const dbConfig = {
  user: "system",
  password: "admin",
  connectString: "localhost:1521/XE",
};

const Query = async (sql) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql);
    await connection.commit();
    return result;
  } catch (error) {
    return (error);
  } finally {
    if (connection) {
      try {
        //await connection.execute(`CREATE TABLE volunteer(name VARCHAR(100),email VARCHAR(50),gender VARCHAR(10),city VARCHAR(100),dob DATE,phone NUMBER(10),education VARCHAR(100),job VARCHAR(100) `);
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
};

const test = async (sql)=>{
    const result = await Query(sql);
    return result;
}


module.exports = test;







