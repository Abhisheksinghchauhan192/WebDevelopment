const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

// creating a database connection
let connection = mysql.createConnection({
  host: "localhost",
  user: "TestUser",
  database: "tests",
  password: "Mysql@123",
});

// try {
//   connection.query("select * from  app", function (err, results, fields) {
//     if (err) throw err;
//     console.log(results);
//     console.log(fields);
//   });
// } catch (err) {
//   console.log(err);
// }

let createRandomUser = () => {
  return [
     faker.string.uuid(),
     faker.internet.username(), // before version 9.1.0, use userName()
     faker.internet.email(),
     faker.internet.password(),
  ];
};

// inserting data into the database
// let q = "insert into user(id,username,email,password) values (?, ?, ?, ?)";
// let data = ["12a", "12usera", "12usera@gmail.coma", "userap"];

// try {
//   connection.query(q, data, (err, results) => {
//     if (err) throw err;
//     console.log(results);
//   });
// } catch (err) {
//   console.log(err);
// }


// when want to insert multiple data then pass the data in .query as array [data]
// the data should be array of datas that need to be enter 

let q2 = "insert into users (id,username,email,password) values ?";
// let data2 = [["12b", "12userb", "12usera@gmail.comb", "userbp"],
//                 ["12c", "12userc", "12usera@gmail.comc", "usercp"],
//                 ["12d", "12userd", "12usera@gmail.comd", "userdp"]
//             ];


// try {
//   connection.query(q2, [data2], (err, results) => {
//     if (err) throw err;
//     console.log(results);
//   });
// } catch (err) {
//   console.log(err);
// }


// entering data in bulk using faker 

let data = [];
for(let i = 0;i<100;i++)
        data.push(createRandomUser());

try {
  connection.query(q2, [data], (err, results) => {
    if (err) throw err;
    console.log(results);
  });
} catch (err) {
  console.log(err);
}



