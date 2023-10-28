const mongoose = require ('mongoose')


const genrescheme = mongoose.Schema({

kodeGenre: {
        type: String,
        require:true
},
NamaGenre: {
    type: String,
    require:true
},
createAt:{
    type:Date,
    default:Date.now
}
})
module.exports = mongoose.model('genre',genrescheme)