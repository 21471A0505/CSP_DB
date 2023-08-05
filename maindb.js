const oracledb = require("oracledb");
// Set database connection details
const dbConfig = {
  user: "system",
  password: "admin",
  connectString: "localhost:1521/XE",
};
//queries
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
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
};

const Result = async (...Parameters) => {
  
  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
    try{
      Details = JSON.parse(`(${Parameters[2]})`);
    } catch(err){}
 switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.name}','${Details.email}','${Details.gender}','${Details.city}','${Details.dob}','${Details.phone}','${Details.education}','${Details.job}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set name = '${Parameters[3].name}', email = '${Parameters[3].email}', gender = '${Parameters[3].gender}', city = '${Parameters[3].city}', dob = '${Parameters[3].dob}', education = '${Parameters[3].education}', job = '${Parameters[3].job}' where phone = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where phone = '${Details}'`;
      break;
    case "Read":
        Sql = `select * from ${Parameters[0]}`;
        if(Details != "All"){
          Sql = `select * from ${Parameters[0]} where phone = '${Details}'`
        }
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};

  
module.exports = Result;