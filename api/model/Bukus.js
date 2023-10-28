const mongoose = require ('mongoose')


const bukuschema = mongoose.Schema({

kodebuku: {
        type: String,
        require:true
},
namabuku: {
    type: String,
    require:true
},
jenisbuku:{
    type:String,
    require:true
},
tanggalterbit:{
    type:Date,
    require:true
},
penulis:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"penulis"
},
genre:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"genre"
},
createAt:{
    type:Date,
    default:Date.now
}
})
module.exports = mongoose.model('buku',bukuschema)