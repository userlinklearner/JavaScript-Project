//import { createConnection } from "mysql2/promise";
//promise = parte do pacote assincrono

import mysql from "mysql2/promise"

export default async function MySQL(query) {
    // get the client
    // create the connection
    const connection = await mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: 'Mikeandike2!',
        database: 'fomezao_api'
    });
    // query database
    const [rows, fields] = await connection.execute(query);

    //console.log(rows)
    return rows
  }