//5 Route buku
const express = require('express')
const router = express.Router()
const buku = require('../model/Bukus')
const Bukus = require('../model/Bukus')

//POST buku
router.post('/',async(req,res) =>{
    //tampung data dari Postman
    const databuku = new Bukus({
        kodebuku: req.body.kodebuku,
        namabuku: req.body.namabuku,
        jenisbuku: req.body.jenisbuku,
        tanggalterbit: req.body.tanggalterbit,
        penulis: req.body.penulis,
        genre: req.body.genre,
    })
try{
    //simpan data ke collcetion Fakultas
    const buku = await databuku.save()
    res.json(buku)
}catch(erorr){
    res.json({message:error})
}
})

// Get
router.get('/',async(req, res) => {
    try{
        const buku = await Bukus.find().populate("penulis").populate("genre")
        res.json(buku)
    }catch(eror){
        res.json({message:eror})
    }
})

//delete(hapus project)
router.delete('/:ID',async(req,res) =>{
    try{
        //Delete/Methodnya
        const penulis = await penulis.deleteOne({
            _id:req.params.ID
        })
        //RESPON
        res.json(penulis)
    }
    catch(eror){
        res,json({
            message:eror
        })
    }
})

//update/merubah data
router.put('/:ID',async(req,res) =>{
    //tampung data dari Postman
    const databuku = {
        kodebuku: req.body.kodebuku,
        namabuku: req.body.namabuku,
        jenisbuku: req.body.jenisbuku,
        tanggalterbit: req.body.tanggalterbit,
        penulis: req.body.penulis,
        genre: req.body.genre,
    }
try{
    //Ubah data le collcetion Genre
    const buku = await Bukus.updateOne({
        _id:req.params.ID
    },databuku)
    res.json(buku)
}catch(erorr){
    res.json({message:error})
}
})
module.exports = router