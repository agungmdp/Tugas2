const mongoose = require ('mongoose')


const Penulisschema = mongoose.Schema({

    kodepenulis: {
        type: String,
        require:true
},
namapenulis: {
    type: String,
    require:true
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
module.exports = mongoose.model('penulis',Penulisschema)