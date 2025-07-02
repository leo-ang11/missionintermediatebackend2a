# missionintermediatebackend2a

REST API sederhana menggunakan Express dan MySQL.

---

## 🔧 Konfigurasi .env

Buat file `.env` di root folder, lalu isi dengan konfigurasi berikut:

MYSQL_HOST='localhost'
MYSQL_USER='root'
MYSQL_PASSWORD=''
MYSQL_DATABASE='video_belajar'

---

## 🗂️ Database

Unduh file SQL untuk database dari link berikut:  
📥 [Database File (.sql)](https://github.com/leo-ang11/missionintermediatebackend1a)

1. Gunakan XAMPP atau software lain untuk menjalankan MySQL server.
2. Buka phpMyAdmin atau MySQL CLI, lalu **import file SQL** tersebut ke database `video_belajar`.

---

## 🚀 Menjalankan Server

Install dependency (jika belum):

```bash
npm install

npm run dev


## Endpoint API (uji coba dengan menggunakan Postman)
• GET all users
GET http://localhost:8080/user

• GET user by ID
GET http://localhost:8080/user/:id
Contoh: http://localhost:8080/user/15

• POST (create) new user
POST http://localhost:8080/user
Payload (JSON body):
{
  "name": "ricky",
  "email": "ricky@gmail.com",
  "phone": "0857205566",
  "password": "abcdefgh"
}

• PATCH (update) user
PATCH http://localhost:8080/user/:id
Contoh: http://localhost:8080/user/20
Payload (JSON body):
{
    "name": "ricky",
    "email": "rickysubagja@gmail.com",
    "phone": "0857205511"
}

• DELETE user
DELETE http://localhost:8080/user/:id
Contoh: http://localhost:8080/user/15

