const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const postSchema = new mongoose.Schema({
    user:String,
    title:String
    
});

module.exports= mongoose.model("posts",postSchema);


