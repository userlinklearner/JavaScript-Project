//import { createConnection } from "mysql2/promise";
//promise = parte do pacote assincrono

import mysql from "mysql2/promise"

export default async function MySQL(query) {
    // get the client
    // create the connection
    const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    });
    // query database
    const [rows, fields] = await connection.execute(query);

    //console.log(rows)
    return rows
  }