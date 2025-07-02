import mysql from 'mysql2';

import dotenv from 'dotenv';
dotenv.config();

export const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise();

export async function getUser() {
    const [result] = await pool.query("SELECT * FROM user")
    return result
}

export async function getUserId(id) {
    const [result] = await pool.query("SELECT * FROM user WHERE id_user = ?", [id])
    return result[0]
}

export async function createUser(name, email, phone, password) {
    const [result] = await pool.query("INSERT INTO user (nama, email, nomor_hp, password) VALUES (?, ?, ?, ?)", [name, email, phone, password])
    return getUserId(result.insertId)
}

export async function deleteUser(id) {
    const [result] = await pool.query("DELETE FROM user WHERE id_user = ?", [id])
    return result.affectedRows
}

export async function isEmailExist(email) {
  const [result] = await pool.query("SELECT id_user FROM user WHERE email = ?", [email]);
  return result.length > 0;
}

export async function editUser(id, name, email) {
    const [result] = await pool.query("UPDATE user SET nama = ?, email = ? WHERE id_user = ?", [name, email, id])
    return result.changedRows
}
