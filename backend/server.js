// server.js

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from "mysql";

const app = express();

// Konfigurasi middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Konfigurasi koneksi database MySQL
const db = mysql.createConnection({
  // host: "localhost",
  // user: "root",
  // password: "root",
  // database: "undangan",
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// Koneksi ke database
db.connect((err) => {
  if (err) throw err;
  console.log("Terhubung ke database MySQL");
});

app.get("/undangan", (req, res) => {
  const q = "SELECT * FROM undangan_aiu_abdul;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/undangan", (req, res) => {
  const q =
    "INSERT INTO undangan_aiu_abdul (`nama`, `keterangan`,`kehadiran`,`ucapan`,`tanggal_jam`) VALUES (?)";
  const values = [
    req.body.nama,
    req.body.keterangan,
    req.body.kehadiran,
    req.body.ucapan,
    req.body.tanggal_jam,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been created succesfully");
  });
});

// Mengatur routing dan endpoint API
app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

// Menjalankan server pada port 5000
app.listen(5000, () => {
  console.log("Server berjalan pada port 5000");
});
