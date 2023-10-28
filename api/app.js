//1.definisi module
const express = require('express')
const app = express()
const mongoose =  require('mongoose');
const bodyParser = require('body-parser')

require('dotenv/config')

//bodypasher
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

//7 import routes
const genre = require('./routes/genre')
const buku = require('./routes/buku');
const penulis = require('./routes/penulis');

//8 Daftarkan ke dalam express
app.use('/genre', genre)
app.use('/penulis', penulis)
app.use('/buku', buku)

//2 listen port
app.listen(process.env.PORT, () => {
    console.log(`Server berjalan pada http://localhost:${process.env.PORT}`);
})

//hubungkan ke database mongodb

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true,UseUnifiedTopology:true});
let db = mongoose.connection;

//jika terjadi eror
db.on('error',console.error.bind(console,'Jika terjadi kesalahan pada koneksi database'));

//jika berhasil
db.once('open', () =>{
      console.log('database berhasil diakses');
    })
