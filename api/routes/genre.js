//5 Route Genre
const express = require('express')
const router = express.Router()
const genre = require('../model/Genre')
const Genre = require('../model/Genre')

//POST Genre
router.post('/',async(req,res) =>{
    //tampung data dari Postman
    const dataGenre = new Genre({
        KodeGenre: req.body.KodeGenre,
        NamaGenre: req.body.NamaGenre,
    })
try{
    //simpan data le collcetion Genre
    const Genre = await dataGenre.save()
    res.json(Genre)
}catch(erorr){
    res.json({message:error})
}
//getGenre
})
router.get('/',async(req, res) => {
    try{
        const genre = await Genre.find()
        res.json(genre)
    }catch(eror){
        res.json({message:eror})
    }
})

//delete(hapus project)
router.delete('/:ID',async(req,res) =>{
    try{
        //Delete/Methodnya
        const genre = await Genre.deleteOne({
            _id:req.params.ID
        })
        //RESPON
        res.json(genre)
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
    const dataGenre = {
        KodeGenre: req.body.KodeGenre,
        NamaGenre: req.body.NamaGenre,
    }
try{
    //Ubah data le collcetion Genre
    const genre = await Genre.updateOne({
        _id:req.params.ID
    },dataGenre)
    res.json(genre)
}catch(erorr){
    res.json({message:error})
}
})

module.exports = router