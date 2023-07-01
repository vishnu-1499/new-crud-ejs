const mongoose = require("mongoose")

const schema = mongoose.Schema
const data = new schema({
    name:{
        type: String
    },
    age:{
        type: Number
    },
    gender:{
        type: String
    },
    email:{
        type: String
    },
    city:{
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model("datas",data)
// module.exports = list;