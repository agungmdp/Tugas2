//5 Route Penulis
const express = require('express')
const router = express.Router()
const Penulis = require('../model/Penulis')

//POST Penulis
router.post('/',async(req,res) =>{
    //tampung data dari Postman
    const datapenulis = new Penulis({
        kodepenulis: req.body.kodepenulis,
        namapenulis: req.body.namapenulis,
        genre: req.body.genre,
    })
try{
    //simpan data le collcetion Penulis
    const Penulis = await datapenulis.save()
    res.json(Penulis)
}catch(erorr){
    res.json({message:error})
}
})
router.get('/',async(req, res) => {
    try{
        const penulis = await Penulis.find().populate("genre")
        res.json(penulis)
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
    const datapenulis = {
        kodepenulis: req.body.kodepenulis,
        namapenulis: req.body.namapenulis,
        genre: req.body.genre,
    }
try{
    //Ubah data le collcetion Genre
    const penulis = await Penulis.updateOne({
        _id:req.params.ID
    },datapenulis)
    res.json(penulis)
}catch(erorr){
    res.json({message:error})
}
})

module.exports = router