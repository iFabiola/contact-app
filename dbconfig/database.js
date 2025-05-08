import mysql from "mysql2";

export const pool = mysql.createPool({
    user: "root",
    password: "",
    database: "contact_form",
    host: "localhost",
    connectionLimit: 10,
    queueLimit: 5
});

